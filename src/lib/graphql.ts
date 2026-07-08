import type { GraphQLResponse } from "@/lib/types/landing";

const WORDPRESS_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ?? "";

export class GraphQLClientError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "GraphQLClientError";
  }
}

export function isGraphQLConfigured(): boolean {
  return WORDPRESS_GRAPHQL_URL.length > 0;
}

export interface FetchGraphQLOptions {
  /** ISR revalidation in seconds. Default: 60. Set to false to disable cache. */
  revalidate?: number | false;
  /** Next.js cache tags for on-demand revalidation. */
  tags?: string[];
}

/**
 * Server-side GraphQL client optimized for React Server Components.
 * Uses native fetch with Next.js caching (`next.revalidate`).
 */
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options: FetchGraphQLOptions = {},
): Promise<T> {
  if (!isGraphQLConfigured()) {
    throw new GraphQLClientError(
      "NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is not configured.",
    );
  }

  const { revalidate = 60, tags } = options;

  let response: Response;

  try {
    response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: revalidate === false ? 0 : revalidate,
        ...(tags ? { tags } : {}),
      },
    });
  } catch (error) {
    throw new GraphQLClientError(
      "Unable to reach the WordPress GraphQL endpoint.",
      error,
    );
  }

  if (!response.ok) {
    throw new GraphQLClientError(
      `WordPress GraphQL responded with HTTP ${response.status}.`,
    );
  }

  let json: GraphQLResponse<T>;

  try {
    json = (await response.json()) as GraphQLResponse<T>;
  } catch (error) {
    throw new GraphQLClientError("Invalid JSON response from WordPress.", error);
  }

  if (json.errors?.length) {
    throw new GraphQLClientError(
      json.errors.map((e) => e.message).join(" | "),
    );
  }

  if (!json.data) {
    throw new GraphQLClientError("GraphQL response contained no data.");
  }

  return json.data;
}

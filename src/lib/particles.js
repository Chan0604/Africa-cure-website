export function generateParticles(count, random = Math.random) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: random() * 100,
    size: random() * 3 + 1,
    duration: random() * 10 + 8,
    delay: random() * 6,
    opacity: random() * 0.5 + 0.15,
    drift: (random() - 0.5) * 100,
  }));
}

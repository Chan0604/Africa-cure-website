import {
  HeartPulse,
  Stethoscope,
  Compass,
  FileText,
  Code2,
  Globe,
  Smartphone,
  Building2,
  Shield,
  Zap,
  Users,
  Star,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  HeartPulse,
  Stethoscope,
  Compass,
  FileText,
  Code2,
  Globe,
  Smartphone,
  Building2,
  Shield,
  Zap,
  Users,
  Star,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? HeartPulse;
}

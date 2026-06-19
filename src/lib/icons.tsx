import {
  ShieldCheck,
  Lock,
  Users,
  Lightbulb,
  HeartHandshake,
  Layers,
  UserCheck,
  BookOpenCheck,
  Target,
  Clock,
  Calculator,
  TrendingUp,
  MonitorSmartphone,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

// Maps the string icon names stored in /data to real components.
const REGISTRY: Record<string, LucideIcon> = {
  ShieldCheck,
  Lock,
  Users,
  Lightbulb,
  HeartHandshake,
  Layers,
  UserCheck,
  BookOpenCheck,
  Target,
  Clock,
  Calculator,
  TrendingUp,
  MonitorSmartphone,
  GraduationCap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = REGISTRY[name] ?? Layers;
  return <Cmp className={className} aria-hidden="true" />;
}

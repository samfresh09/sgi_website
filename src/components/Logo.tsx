import { Link } from "react-router-dom";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Logo({
  variant = "color",
  className,
  withText = true,
}: {
  variant?: "color" | "white";
  className?: string;
  withText?: boolean;
}) {
  const src = variant === "white" ? SITE.logoWhite : SITE.logo;
  const textColor = variant === "white" ? "text-white/80" : "text-muted-foreground";

  return (
    <Link
      to="/"
      aria-label={`${SITE.name} — accueil`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <img
        src={src}
        alt={`Logo ${SITE.name}`}
        width={132}
        height={40}
        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      {withText && (
        <span className={cn("hidden text-xs font-medium sm:block", textColor)}>
          Expertise comptable
          <br />& solutions informatiques
        </span>
      )}
    </Link>
  );
}

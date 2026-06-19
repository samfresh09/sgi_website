import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: { name: string; path: string }[];
  light?: boolean;
}) {
  const base = light ? "text-white/60" : "text-muted-foreground";
  const current = light ? "text-white" : "text-foreground";
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className={`font-medium ${current}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

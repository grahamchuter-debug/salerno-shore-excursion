import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: BreadcrumbItem[];
  light?: boolean;
}) {
  const muted = light ? "text-white/65" : "text-gray-500";
  const current = light ? "text-white" : "text-coastal-700";
  const sep = light ? "text-white/35" : "text-gray-300";
  const link = light ? "hover:text-white" : "hover:text-coastal-700";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1 text-sm ${muted}`}>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1">
            {index > 0 && (
              <span className={sep} aria-hidden="true">
                /
              </span>
            )}
            {index === items.length - 1 ? (
              <span className={`font-medium ${current}`} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className={`${link} transition-colors`}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import JsonLd from "./JsonLd";
import { createBreadcrumbJsonLd } from "@/lib/seo/breadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo/schema";

type SeoBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function SeoBreadcrumb({ items }: SeoBreadcrumbProps) {
  return (
    <>
      <JsonLd data={createBreadcrumbJsonLd(items)} />
      <Breadcrumb
        items={items.map((item, index) => ({
          label: item.name,
          href: item.url,
          current: index === items.length - 1,
        }))}
      />
    </>
  );
}

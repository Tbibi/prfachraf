import PerfumesPage from "./PerfumesPage";
import { generateCollectionMetadataFromSearchParams } from "@/lib/seo/generateMetadata";
import { setRequestLocale } from "next-intl/server";

type PerfumesSearchParams = {
  category?: string | string[];
  sort?: string | string[];
};

type PerfumesRouteProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<PerfumesSearchParams>;
};

const getSearchParamValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
};

export async function generateMetadata({
  params,
  searchParams,
}: PerfumesRouteProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  return generateCollectionMetadataFromSearchParams(
    resolvedSearchParams,
    locale
  );
}

export default async function PerfumesRoute({
  params,
  searchParams,
}: PerfumesRouteProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  setRequestLocale(locale);

  return (
    <PerfumesPage
      initialCategory={getSearchParamValue(resolvedSearchParams.category)}
      initialSort={getSearchParamValue(resolvedSearchParams.sort)}
    />
  );
}

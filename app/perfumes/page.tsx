import PerfumesPage from "./PerfumesPage";
import { generateCollectionMetadataFromSearchParams } from "@/lib/seo/generateMetadata";

type PerfumesSearchParams = {
  category?: string | string[];
  sort?: string | string[];
};

type PerfumesRouteProps = {
  searchParams: Promise<PerfumesSearchParams>;
};

const getSearchParamValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
};

export async function generateMetadata({ searchParams }: PerfumesRouteProps) {
  const resolvedSearchParams = await searchParams;
  return generateCollectionMetadataFromSearchParams(resolvedSearchParams);
}

export default async function PerfumesRoute({ searchParams }: PerfumesRouteProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <PerfumesPage
      initialCategory={getSearchParamValue(resolvedSearchParams.category)}
      initialSort={getSearchParamValue(resolvedSearchParams.sort)}
    />
  );
}

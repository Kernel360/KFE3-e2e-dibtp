import { Metadata } from 'next';

import { PageContainer, SearchHeader } from '@/components/layout';
import { ProductListWithSuspense } from '@/components/products';

interface SearchResultPageParams {
  searchParams: Promise<{ keyword: string }>;
}

export async function generateMetadata({
  searchParams,
}: SearchResultPageParams): Promise<Metadata> {
  const { keyword } = await searchParams;

  return {
    title: keyword ? `"${keyword}" 검색 결과` : '검색 결과',
    description: keyword
      ? `"${keyword}" 검색 결과를 확인하세요. 지역 기반 중고 경매 플랫폼에서 원하는 상품을 찾아보세요.`
      : '지역 기반 중고 경매 플랫폼에서 상품을 검색하고 경매에 참여해보세요.',
    openGraph: {
      title: keyword ? `"${keyword}" 검색 결과` : '검색 결과',
      description: keyword
        ? `"${keyword}" 검색 결과를 확인하세요. 지역 기반 중고 경매 플랫폼에서 원하는 상품을 찾아보세요.`
        : '지역 기반 중고 경매 플랫폼에서 상품을 검색하고 경매에 참여해보세요.',
      type: 'website',
    },
  };
}

export const dynamic = 'force-dynamic';

const SearchResultPage = async ({ searchParams }: SearchResultPageParams) => {
  const { keyword } = await searchParams;

  return (
    <>
      <h1 className="font-style-headline-h5 sr-only">&quot;{keyword}&quot; 상품 목록</h1>

      <SearchHeader resultKeyword={keyword} hasSearchDropDown={true} />

      <PageContainer>
        <ProductListWithSuspense keyword={keyword} />
      </PageContainer>
    </>
  );
};

export default SearchResultPage;

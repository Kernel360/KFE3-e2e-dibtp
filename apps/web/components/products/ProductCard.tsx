'use client';

import Link from 'next/link';

import { PRODUCT_STATUS, PAGE_ROUTES } from '@web/constants';

import { useCurrentPrice } from '@web/hooks';
import type { ProductStatus } from '@web/types';
import { formatRelativeTime } from '@web/utils/date';

import ProductThumb from './ProductThumb';

interface ProductCardProps {
  productId: number;
  title: string;
  imgUrl: string;
  startPrice: number;
  minPrice: number;
  decreaseUnit: number;
  auctionStartedAt: string;
  status: ProductStatus;
  viewCount?: number;
  createdAt: string;
  region: string;
  detailAddress: string;
  isShowProductBadge?: boolean;
}

const ProductCard = ({
  productId,
  imgUrl,
  title,
  startPrice,
  minPrice,
  decreaseUnit,
  auctionStartedAt,
  status,
  createdAt,
  region,
  detailAddress,
  isShowProductBadge,
}: ProductCardProps) => {
  const currentPrice = useCurrentPrice({
    startPrice,
    minPrice,
    decreaseUnit,
    auctionStartedAt,
    status,
  });

  const shortAddress = detailAddress.split(' ')[0] ?? '';

  return (
    <Link href={PAGE_ROUTES.PRODUCTS.DETAIL(productId.toString())}>
      <article
        className="bg-white flex items-center gap-md p-sm rounded-[20px]"
        aria-label={`${title}, ${status}, 현재가 ${currentPrice}, 지역 ${region}`}
      >
        <ProductThumb
          imgUrl={imgUrl}
          title={title}
          status={status}
          isShowBadge={isShowProductBadge}
          displaySize="w-20"
          clsWidth={80}
          clsHeight={80}
        />

        <section className="flex flex-col gap-sm">
          <h3 className="font-normal text-base line-clamp-2">{title}</h3>
          {status === PRODUCT_STATUS.SOLD ? (
            <p className="font-style-medium font-bold text-text-info">경매가 종료되었습니다</p>
          ) : (
            <p className="font-style-large">현재가 {currentPrice.toLocaleString()}원</p>
          )}
          <p className="text-xs flex items-center gap-xs  text-text-info">
            {region} {shortAddress}
            <i>•</i>
            {formatRelativeTime(createdAt)}
          </p>
        </section>
      </article>
    </Link>
  );
};

export default ProductCard;

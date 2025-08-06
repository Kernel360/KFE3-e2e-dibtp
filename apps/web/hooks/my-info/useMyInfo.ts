'use client';

import { useQuery } from '@tanstack/react-query';

import { MY_INFO_QUERY_KEY } from '@web/constants';
import { fetchMyInfo } from '@web/services/my-info/client';

import type { MyInfoAPIResponse } from '@web/types';

export const useMyInfo = (): MyInfoAPIResponse => {
  const { data, isLoading } = useQuery<MyInfoAPIResponse>({
    queryKey: MY_INFO_QUERY_KEY,
    queryFn: fetchMyInfo,
  });

  return {
    region: data?.region ?? '',
    detailAddress: data?.detailAddress ?? '',
    userId: data?.userId ?? '',
    nickname: data?.nickname ?? '',
    profileImage: data?.profileImage ?? '',
    isLoading,
  };
};

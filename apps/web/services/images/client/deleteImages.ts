import { API_ROUTES, IMAGE_CONFIGS } from '@web/constants';
import type { ImageConfigType, UploadedImage } from '@web/types';

/**
 * 클라이언트에서 API를 통해 여러 이미지 삭제
 */
export const deleteImages = async (
  images: UploadedImage[],
  type: ImageConfigType = 'product'
): Promise<void> => {
  if (images.length === 0) return;

  const config = IMAGE_CONFIGS[type];
  const bucketName = config.storage.bucket;

  // 이미지 URL에서 path 추출 (Supabase 스토리지 경로)
  const imagePaths = images
    .map((image) => {
      if (image.url) {
        // URL에서 경로 부분만 추출
        // 예: https://supabase.com/storage/v1/object/public/bucket/path/file.jpg -> path/file.jpg
        const url = new URL(image.url);
        const pathSegments = url.pathname.split('/');
        const bucketIndex = pathSegments.findIndex((segment) => segment === bucketName);
        if (bucketIndex !== -1 && bucketIndex < pathSegments.length - 1) {
          return pathSegments.slice(bucketIndex + 1).join('/');
        }
      }
      return null;
    })
    .filter((path): path is string => path !== null);

  if (imagePaths.length === 0) return;

  try {
    const response = await fetch(API_ROUTES.IMAGES, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paths: imagePaths,
        type: type,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('이미지 삭제 실패:', errorData);
      // 삭제 실패는 로그만 남기고 에러를 던지지 않음 (상품 등록 실패 상황에서)
    }
  } catch (error) {
    console.error('이미지 삭제 중 오류:', error);
    // 네트워크 오류 등도 로그만 남기고 계속 진행
  }
};

/**
 * 클라이언트에서 API를 통해 단일 이미지 삭제
 */
export const deleteImage = async (image: UploadedImage): Promise<void> => {
  await deleteImages([image]);
};

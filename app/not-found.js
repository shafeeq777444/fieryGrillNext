
'use client'; // important for Lottie (runs on client side)

import Lottie404Skeleton from '@/components/skeltons/not-found/Lottie404Skeleton';
import dynamic from 'next/dynamic';

const Lottie404 = dynamic(() => import('@/components/common/Lottie404'), {
  ssr: false,
  loading: () => <Lottie404Skeleton />,
});

export default function NotFound() {
  return (
    <Lottie404 />
  );
}


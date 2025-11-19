'use client';

import { Suspense, ReactNode } from 'react';
import Loading from './Loading';

interface LoadingScreenProps {
  children: ReactNode;
  /**
   * Custom loading message
   */
  loadingMessage?: string;
}

/**
 * LoadingScreen - Wrapper component that shows loading state
 *
 * Usage:
 * ```tsx
 * <LoadingScreen loadingMessage="Fetching data...">
 *   <YourComponent />
 * </LoadingScreen>
 * ```
 */
export default function LoadingScreen({
  children,
  loadingMessage = 'Loading...'
}: LoadingScreenProps) {
  return (
    <Suspense fallback={<Loading message={loadingMessage} />}>
      {children}
    </Suspense>
  );
}

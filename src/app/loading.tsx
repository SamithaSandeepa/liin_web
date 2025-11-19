import LoadingPro from '@/components/ui/LoadingPro';

/**
 * Root Loading Component
 *
 * This is automatically shown by Next.js when:
 * - Navigating between pages
 * - Loading async Server Components
 * - Route transitions
 *
 * Next.js will wrap this in Suspense automatically.
 */
export default function RootLoading() {
  return <LoadingPro message="Loading Page..." />;
}

import React, { lazy, Suspense } from 'react';

const LazyVlogPage = lazy(() => import('./VlogPage'));

const VlogPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVlogPage {...props} />
  </Suspense>
);

export default VlogPage;

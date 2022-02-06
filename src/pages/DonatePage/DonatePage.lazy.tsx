import React, { lazy, Suspense } from 'react';

const LazyDonatePage = lazy(() => import('./DonatePage'));

const DonatePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDonatePage {...props} />
  </Suspense>
);

export default DonatePage;

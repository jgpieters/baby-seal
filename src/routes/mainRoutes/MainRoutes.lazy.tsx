import React, { lazy, Suspense } from "react";

const LazyMainRoutes = lazy(() => import("./MainRoutes"));

const MainRoutes = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMainRoutes {...props} />
  </Suspense>
);

export default MainRoutes;

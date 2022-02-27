import React, { lazy, Suspense } from "react";

const LazyAdminRoutes = lazy(() => import("./AdminRoutes"));

const AdminRoutes = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAdminRoutes {...props} />
  </Suspense>
);

export default AdminRoutes;

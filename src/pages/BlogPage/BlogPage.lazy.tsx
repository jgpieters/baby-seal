import React, { lazy, Suspense } from 'react';

const LazyBlogPage = lazy(() => import('./BlogPage'));

const BlogPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBlogPage {...props} />
  </Suspense>
);

export default BlogPage;

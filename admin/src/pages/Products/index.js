import React, { lazy, Suspense } from 'react';
import Loading from '../../../components/shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Products'));

function Products() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default Products;
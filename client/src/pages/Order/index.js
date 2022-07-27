import React, { lazy, Suspense } from 'react';
import Loading from '../../../components/shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Order'));

function Order() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default Order;
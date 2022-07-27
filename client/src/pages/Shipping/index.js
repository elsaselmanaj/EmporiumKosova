import React, { lazy, Suspense } from 'react';
import Loading from '../../../components/shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Shipping'));

function Shipping() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default Shipping;
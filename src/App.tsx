import React, { Suspense } from 'react';

// Importa o componente de forma assíncrona
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;

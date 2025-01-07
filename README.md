# ReactLazyLoading
Projeto de Lazy Loading utilizando React.js, TypeScript e Vite.

### Passo a passo para rodar esse projeto localmente.
1. Instale o Vite: Primeiro, você precisa instalar o Vite. Abra o terminal e execute o seguinte comando:  
```
npm create vite@latest my-lazy-loading-app --template react-ts
cd my-lazy-loading-app
npm install
```

2. Configurar o Lazy Loading: Abra o arquivo ``` src/App.tsx ``` e modifique-o para usar o Lazy Loading. Aqui está um exemplo:  
```
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
```
3. Crie o Componente Lazy: Crie um novo arquivo chamado ``` src/LazyComponent.tsx ``` e adicione o seguinte código:  
```
import React from 'react';
const LazyComponent: React.FC = () => {
  return <div>Este é um componente carregado de forma preguiçosa!</div>;
};
export default LazyComponent;
```
4. Execute o Projeto: Finalmente, execute o projeto com o comando:  
``` npm run dev ```

Isso deve iniciar o servidor de desenvolvimento e você poderá ver o componente sendo carregado de forma preguiçosa.








import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Router from './routes/index.routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App

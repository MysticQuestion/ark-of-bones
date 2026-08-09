import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './styles/tokens.css';
import './styles/global.css';
import './styles/components.css';
import './styles/conversion.css';
import './styles/media.css';

const routerBase = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={routerBase}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './boltnew/page';
import './index.css';
import './assets/scss/index.scss';

createRoot(document.getElementById('root')!).render(
    <App />
);

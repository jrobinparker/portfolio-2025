import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/inter';
import "@fontsource/inter/600.css";
import '@fontsource/inter/300.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <App />
)

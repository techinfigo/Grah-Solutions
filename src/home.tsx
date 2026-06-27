import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MobileActionBar from './components/MobileActionBar.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <Home />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  </StrictMode>,
);

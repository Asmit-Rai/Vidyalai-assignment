import React from 'react';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import TopNavbar from '../components/Navbar';
import { WindowWidthProvider } from '../components/hooks/WindowWidthContext';

export default function HomePage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <WindowWidthProvider>
      <TopNavbar />
      <div
        style={{
          margin: '60px 0px 20px',
        }}
      >
        <Posts />
      </div>
      <Footer />

      </WindowWidthProvider>
    </div>
  );
}

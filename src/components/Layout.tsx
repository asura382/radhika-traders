import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import WhatsAppButton from './WhatsAppButton.tsx';

const pageTitles: Record<string, string> = {
  '/': 'Radhika Traders | Materials, Design & Details',
  '/about': 'Our Story | Radhika Traders',
  '/contact': 'Contact & Quotations | Radhika Traders',
  '/gallery': 'Inspiration Gallery | Radhika Traders',
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const collectionMatch = location.pathname.match(/^\/collections\/([^/]+)/);
    const productMatch = location.pathname.match(/^\/product\/([^/]+)/);
    let title = pageTitles[location.pathname];

    if (collectionMatch) {
      title = `${collectionMatch[1].replaceAll('-', ' ')} Collection | Radhika Traders`;
    } else if (productMatch) {
      title = 'Product Reference | Radhika Traders';
    }

    document.title = title ?? 'Radhika Traders | Premium Materials & Hardware';
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

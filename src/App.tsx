import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import About from './pages/About.tsx';
import Collection from './pages/Collection.tsx';
import Contact from './pages/Contact.tsx';
import Gallery from './pages/Gallery.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:categoryId" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

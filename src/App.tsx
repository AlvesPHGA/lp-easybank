import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './pages/includes/Global/Footer';
import Header from './pages/includes/Global/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Careers from './pages/careers/Careers';

export default function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about/" element={<About />} />
                  <Route path="contact/" element={<Contact />} />
                  <Route path="blog/" element={<Blog />} />
                  <Route path="careers/" element={<Careers />} />
               </Routes>
            </main>
            <Footer />
         </BrowserRouter>
      </>
   );
}

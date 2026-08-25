import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Impact } from "./components/Impact";
import { GalleryTeaser } from "./components/GalleryTeaser";
import { QuoteBanner } from "./components/QuoteBanner";
import { Team } from "./components/Team";
import { Apply } from "./components/Apply";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GalleryPage } from "./components/GalleryPage";

export default function App() {
  const { lang, t, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar t={t} lang={lang} onSetLang={setLang} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero t={t} />
              <About t={t} />
              <Mission t={t} />
              <Services t={t} />
              <Impact t={t} />
              <QuoteBanner t={t} />
              <Team t={t} />
              <Apply t={t} />
              <Contact t={t} />
              <GalleryTeaser t={t} />
            </main>
          }
        />
        <Route path="/galeria" element={<GalleryPage t={t} />} />
      </Routes>
      <Footer t={t} />
    </>
  );
}

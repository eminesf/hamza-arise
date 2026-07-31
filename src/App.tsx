import { useLanguage } from "./hooks/useLanguage";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Impact } from "./components/Impact";
import { QuoteBanner } from "./components/QuoteBanner";
import { Team } from "./components/Team";
import { Apply } from "./components/Apply";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
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
      </main>
      <Footer t={t} />
    </>
  );
}

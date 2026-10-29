import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SignatureMenu } from "./components/SignatureMenu";
import { Story } from "./components/Story";
import { Manifesto } from "./components/Manifesto";
import { CafeExperience } from "./components/CafeExperience";
import { Location } from "./components/Location";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureMenu />
        <Story />
        <Manifesto />
        <CafeExperience />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

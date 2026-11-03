import { useEffect, useState } from "react";
import signature from "../assets/signature.webp";

import image1 from "../assets/home-page-image/1.png";
import image10 from "../assets/home-page-image/10.png";
import image11 from "../assets/home-page-image/11.png";
import image12 from "../assets/home-page-image/12.png";
import image2 from "../assets/home-page-image/2.png";
import image3 from "../assets/home-page-image/3.png";
import image4 from "../assets/home-page-image/4.png";
import image5 from "../assets/home-page-image/5.png";
import image6 from "../assets/home-page-image/6.png";
import image7 from "../assets/home-page-image/7.png";
import image8 from "../assets/home-page-image/8.png";
import image9 from "../assets/home-page-image/9.png";

const slides = [
  { url: image1, alt: "Interior design image 1" },
  { url: image2, alt: "Interior design image 2" },
  { url: image3, alt: "Interior design image 3" },
  { url: image4, alt: "Interior design image 4" },
  { url: image5, alt: "Interior design image 5" },
  { url: image6, alt: "Interior design image 6" },
  { url: image7, alt: "Interior design image 7" },
  { url: image8, alt: "Interior design image 8" },
  { url: image9, alt: "Interior design image 9" },
  { url: image10, alt: "Interior design image 10" },
  { url: image11, alt: "Interior design image 11" },
  { url: image12, alt: "Interior design image 12" },
];

const navigation = [
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["Services We Offer", "/services-we-offer"],
  ["Why Choose Us", "/why-choose-us"],
  ["Space Psychology", "/space-psychology"],
  ["Features", "/features"],
  ["FAQS", "/faqs"],
  ["Career", "/career"],
  ["Contact", "/contact"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/atelye_apurv/?hl=en"],
  // ["LinkedIn", "https://www.linkedin.com/"],
  // ["Pinterest", "https://www.pinterest.com/"],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            role="img"
            aria-label={slide.alt}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url("${slide.url}")` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navbar */}
      <header className="absolute left-0 top-0 z-30 p-3 sm:p-4">
        <div className="flex flex-col items-start">
          {/* Hamburger Icon */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="natural-home-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex h-7 w-7 flex-col justify-center gap-[5px] focus:outline-none"
          >
            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Orange Tagline */}
          <p className="mt-2 whitespace-nowrap text-[10px] font-normal leading-relaxed tracking-[0.1px] text-orange-400 sm:text-[11px]">
            Every space tells a story, Our job is to make sure it tells yours.
          </p>

          {/* Navigation Menu */}
          <nav
            id="natural-home-navigation"
            aria-label="Main navigation"
            hidden={!menuOpen}
            className="mt-5 flex max-h-[70vh] min-w-[190px] flex-col gap-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-l border-orange-400 pl-4"
          >
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="inline-block w-fit origin-left text-sm tracking-wide text-white transition-all duration-300 ease-out hover:scale-110 hover:text-orange-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Center Signature */}
      <section
        aria-label="Apurv Baid"
        className="absolute inset-0 z-10 flex items-center justify-center px-4"
      >
        <img
          src={signature}
          alt="Atel'ye Apurv"
          className="w-full max-w-[900px]"
        />
      </section>

      {/* Slide Counter */}
      <div className="absolute bottom-24 right-5 z-20 flex items-center gap-3 text-[11px] tracking-widest text-white sm:bottom-28 sm:right-10">
        <span>{String(active + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-white/70" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 z-20 flex w-full flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-10">
        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] tracking-wider text-white transition-colors duration-300 hover:text-orange-400 sm:text-xs"
            >
              {label} ↗
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-[9px] tracking-[3px] text-white/80 sm:text-[10px]">
          DESIGNED WITH INTENTION
        </p>

        {/* Contact */}
        <a
          href="/contact"
          className="text-[10px] tracking-[2px] text-white transition-colors duration-300 hover:text-orange-400 sm:text-xs"
        >
          LET’S CONNECT <span>↗</span>
        </a>
      </footer>
    </main>
  );
}

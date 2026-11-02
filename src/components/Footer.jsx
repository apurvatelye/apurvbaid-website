import { FaArrowUp, FaFacebook, FaInstagram, FaShareAlt } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0b0b0b] text-white">
      {/* Desktop */}
      <div className="hidden md:flex max-w-[1800px] mx-auto h-32 px-12 items-center justify-between">
        {/* Left */}
        <button onClick={scrollToTop} className="group flex items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-1" />
          </div>

          <span className="text-sm font-medium">Back Top</span>
        </button>

        {/* Center */}
        <p className="text-lg font-medium text-white/90">
          {new Date().getFullYear()} © Tech Titans. All rights reserved.
        </p>

        {/* Right */}
        <button className="group flex items-center gap-6">
          <span className="text-lg font-medium">Follow Us</span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <FaShareAlt className="text-sm" />
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col items-center justify-center gap-5 py-8 px-6">
        <p className="text-center text-sm font-medium leading-relaxed">
          {new Date().getFullYear()} © Tech Titans. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/atelye_apurv/"
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:opacity-70"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/atelyeapurv/"
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:opacity-70"
          >
            <FaFacebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Services We Offer", path: "/services-we-offer" },
  { title: "Why Choose Us", path: "/why-choose-us" },
  { title: "Space Psychology", path: "/space-psychology" },
  { title: "Features", path: "/features" },
  { title: "FAQS", path: "/faqs" },
  { title: "Career", path: "/career" },
  { title: "Contact", path: "/contact" },
];

const FullscreenMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[100] overflow-hidden transition-all duration-700 ease-in-out ${
        menuOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* MENU CONTAINER */}
      <div className="h-dvh w-full flex items-start justify-end sm:items-center sm:justify-center px-6 pt-24 pb-5 overflow-hidden">
        <ul className="flex flex-col items-end text-right sm:items-center sm:text-center leading-[0.85] gap-3 min-w-0">
          {menuItems.map((item, index) => (
            <li key={item.title} className="overflow-hidden">
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  relative
                  block
                  font-sixcaps
                  uppercase
                  text-white
                  text-[clamp(38px,9vw,76px)] sm:text-[clamp(55px,6vw,76px)]
                  tracking-[3px]
                  transition-all
                  duration-700
                  ease-out
                  whitespace-nowrap
                "
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: menuOpen ? "translateX(0)" : "translateX(120px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <span
                  className="
                    inline-block
                    transition-all
                    duration-500
                    group-hover:text-[#8c6144]
                    group-hover:tracking-[5px]
                    group-hover:translate-x-2
                  "
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullscreenMenu;


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
      className={`fixed inset-0 z-[100] bg-black overflow-hidden transition-all duration-700 ease-in-out ${
        menuOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* RESPONSIVE MENU CONTAINER */}
      <div
        className="
          flex
          h-[100dvh]
          w-full
          items-center
          justify-center
          px-4
          py-3
          sm:px-6
        "
      >
        <ul
          className="
            flex
            w-full
            flex-col
            items-end
            text-right
            sm:items-center
            sm:text-center
            leading-none
            gap-[clamp(3px,1.1vh,12px)]
          "
        >
          {menuItems.map((item, index) => (
            <li
              key={item.title}
              className="w-full overflow-hidden"
            >
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  relative
                  block
                  w-full
                  font-sixcaps
                  uppercase
                  text-white
                  text-[clamp(27px,5.8vh,76px)]
                  sm:text-[clamp(34px,6.2vh,76px)]
                  lg:text-[clamp(38px,6.5vh,76px)]
                  tracking-[2px]
                  transition-all
                  duration-700
                  ease-out
                  whitespace-nowrap
                "
                style={{
                  transitionDelay: `${index * 60}ms`,
                  transform: menuOpen
                    ? "translateX(0)"
                    : "translateX(80px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <span
                  className="
                    inline-block
                    transition-all
                    duration-500
                    group-hover:text-[#8c6144]
                    group-hover:tracking-[3px]
                    group-hover:translate-x-1
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

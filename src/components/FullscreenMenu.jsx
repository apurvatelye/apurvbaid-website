import { path } from "framer-motion/client";
import { Link } from "react-router-dom";



const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Why Choose Us", path: "/why-choose-us" },
    { title: "Space Psychology", path: "#" },
    { title: "Features", path: "#" },
    { title: "FAQS", path: "/faqs" },
    { title: "Career", path: "/career" },
    { title: "Contact", path: "/contact" },

];

const FullscreenMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed inset-0 bg-black z-[100] transition-all duration-700 ease-in-out ${menuOpen
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
                }`}
        >
            {/* MENU CONTAINER */}
            <div className="h-screen overflow-y-auto flex justify-end sm:justify-center px-6 sm:px-4 pt-28 pb-28">
                <ul className="flex flex-col items-end sm:items-center text-right sm:text-center leading-[0.82] gap-3 min-h-max">
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
                  text-[55px]
                  sm:text-[70px]
                  md:text-[120px]
                  tracking-[4px]
                  transition-all
                  duration-700
                  ease-out
                "
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: menuOpen
                                        ? "translateX(0)"
                                        : "translateX(120px)",
                                    opacity: menuOpen ? 1 : 0,
                                }}
                            >
                                <span
                                    className="
                    inline-block
                    transition-all
                    duration-500
                    group-hover:text-[#8c6144]
                    group-hover:tracking-[10px]
                    group-hover:translate-x-4
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
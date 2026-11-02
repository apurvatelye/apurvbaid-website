import { useState } from "react";
import { Link } from "react-router-dom";
import FullscreenMenu from "./FullscreenMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
                    fixed
                    top-0
                    left-0
                    z-[200]
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5 py-5
                    sm:px-8
                    md:px-10
                    lg:px-16
                "
      >
        {/* Clickable Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to homepage"
          className="cursor-pointer"
        >
          <h1
            className="
                            tangerine-bold
                            text-white
                            leading-none
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            lg:text-[40px]
                        "
          >
            Atel'ye Apurv
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <span
            className="
                            text-white
                            uppercase
                            tracking-[2px]
                            text-xs
                            sm:text-sm
                        "
          >
            Menu
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
                            relative
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                        "
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`
                                absolute
                                h-[2px]
                                w-5
                                bg-white
                                transition-all
                                duration-500
                                ${menuOpen ? "rotate-45" : "-translate-y-[6px]"}
                            `}
            />

            <span
              className={`
                                absolute
                                h-[2px]
                                w-5
                                bg-white
                                transition-all
                                duration-500
                                ${menuOpen ? "-rotate-45" : "translate-y-[6px]"}
                            `}
            />
          </button>
        </div>
      </header>

      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;

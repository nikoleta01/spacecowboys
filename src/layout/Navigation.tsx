import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 py-4 transition-all duration-300 ${
          isScrolled ? "bg-navigation" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/">
            <IconContext.Provider value={{ color: "#fcfcfe", size: "30" }}>
              <BsFillRocketTakeoffFill />
            </IconContext.Provider>
          </a>

          <div className="hidden md:flex space-x-8 text-font-navigation">
            <a
              href="#about"
              className="text-white hover:text-primary transition-colors"
            >
              ABOUT US
            </a>
            <a
              href="#team"
              className="text-white hover:text-primary transition-colors"
            >
              THE TEAM
            </a>
            <a
              href="#impressions"
              className="text-white hover:text-primary transition-colors"
            >
              IMPRESSIONS
            </a>
            <a
              href="#contact"
              className="text-white hover:text-primary transition-colors"
            >
              CONTACT
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <div className="fixed top-4 right-4 z-50">
                <span className="text-white text-lg font-bold px-4 py-2 border-2 border-white rounded">
                  MENU
                </span>
              </div>
            ) : (
              <div className="fixed top-4 right-4 z-50">
                <span className="text-white text-lg font-bold px-4 py-2 border-2 border-white rounded">
                  X CLOSE
                </span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-navigation z-30 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8 text-center">
            <a
              href="#about"
              className="text-white text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a
              href="#team"
              className="text-white text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              THE TEAM
            </a>
            <a
              href="#impressions"
              className="text-white text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              IMPRESSIONS
            </a>
            <a
              href="#contact"
              className="text-white text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </>
  );
}

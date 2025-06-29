import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Mobile hamburger */}
      <div
        className="sm:cursor-pointer fixed top-6 left-6 z-[999] rounded-lg bg-white/40 p-2 md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>

      {/* Mobile bottom navigation */}
      <nav
        className={`fixed md:hidden z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer  ${
              i === active && "bg-dark_primary text-white"
            } `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>

      {/* Desktop top-right navigation */}
      <nav
        className="hidden md:flex fixed top-6 left-10 z-[999] items-center gap-5 bg-white/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary"
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full cursor-pointer transition-colors duration-200  ${
              i === active ? "bg-dark_primary text-white" : "hover:bg-dark_primary/20"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

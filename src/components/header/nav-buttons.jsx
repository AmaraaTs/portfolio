import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { useTheme } from "next-themes";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex border-l-2 border-gray-400 pl-5 items-center">
      {theme === "light" ? (
        <MdOutlineLightMode
          fontSize="1.8em"
          className="hover:cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <CiDark
          fontSize="1.8em"
          className="hover:cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        />
      )}
      <button className=" ml-5 py-[6px] px-4 bg-black text-white rounded-xl dark:bg-white dark:text-black">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;

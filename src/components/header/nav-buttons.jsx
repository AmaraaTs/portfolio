import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex border-l-2 border-gray-400 pl-5 items-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button className=" ml-5 py-[6px] px-4 bg-black text-white rounded-xl dark:bg-white dark:text-black">
          Download CV
        </button>
      </motion.div>
    </div>
  );
};

export default NavButtons;

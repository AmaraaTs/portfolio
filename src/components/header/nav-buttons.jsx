import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex border-l-2 border-gray-400 pl-5">
      <MdOutlineLightMode fontSize="1.8em" />
      <button className=" ml-5 py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;

import { motion } from "framer-motion";

const Menu = ({ menuList }) => {
  return (
    <div className="items-center flex">
      <ul className="flex gap-10 items-center">
        {menuList.map((menu) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <li>
              <a href={menu.link} className="scroll-smooth focus:scroll-auto">
                {menu.label}
              </a>
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

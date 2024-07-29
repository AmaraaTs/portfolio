const Menu = ({ menuList }) => {
  return (
    <div className="items-center flex">
      <ul className="flex gap-10 items-center">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link} className="scroll-smooth focus:scroll-auto">
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

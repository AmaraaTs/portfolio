import Menu from "./menu";
import NavButtons from "./nav-buttons";

const menuList = [
  { label: "About", link: "/#about" },
  { label: "Skill", link: "/#skill" },
  { label: "Work", link: "/#work" },
  { label: "Contact", link: "/#contact" },
];

const NavSection = () => {
  return (
    <div className="flex gap-10">
      <Menu menuList={menuList} />

      <NavButtons />
    </div>
  );
};

export default NavSection;

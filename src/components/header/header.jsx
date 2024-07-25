import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[400px] py-6">
      <h1 className="text-3xl font-bold">AMAR</h1>
      <NavSection />
    </header>
  );
};

export default Header;

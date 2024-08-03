import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 md:px-[400px] md:py-6 ">
      <h1 className="text-3xl font-bold">AMAR</h1>
      <NavSection />
      {/* scroll-smooth */}
    </header>
  );
};

export default Header;

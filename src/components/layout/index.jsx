import Header from "../header/header";
import SectionFooter from "../sections/section-footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SectionFooter />
    </>
  );
};

export default Layout;

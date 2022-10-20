import Footer from "components/Footer";
import Header from "components/Header";
import SkipToMain from "components/SkipToMain";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainId = "main";
  return (
    <>
      <SkipToMain mainId={mainId} />
      <Header />
      <main id={mainId}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

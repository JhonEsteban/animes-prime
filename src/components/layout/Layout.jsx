import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

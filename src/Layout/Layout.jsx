import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "16px" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

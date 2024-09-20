import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Proudct from "./pages/Proudct";
import Servies from "./pages/Servies";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Servies />
        <Proudct />
      </Layout>
    </>
  );
}

export default App;

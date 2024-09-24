import "./App.css";
import Layout from "./Layout/Layout";
import Community from "./pages/Community";
import Design from "./pages/Design";
import Home from "./pages/Home";
import Proudct from "./pages/Proudct";
import Servies from "./pages/Servies";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Servies />
        <Community />
        <Proudct />
        <Design />
      </Layout>
    </>
  );
}

export default App;

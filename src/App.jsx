import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "./AppContext";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
function App() {
  const { isDark } = useContext(AppContext);

  return (
    <div className={`app ${isDark && "mode--dark"}`}>
      <Navbar />
      <div id="components__container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

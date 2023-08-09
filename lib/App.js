import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "./AppContext";

// export async function loader() {
//   const contact = await getContact();
//   return { contact };
// }
function App() {
  const {
    isDark
  } = useContext(AppContext);
  return dom("div", {
    className: `app ${isDark && "mode--dark"}`
  }, dom(Navbar, null), dom("div", null, dom(Outlet, null)), dom(Footer, null));
}
export default App;
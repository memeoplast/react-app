import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Home from "./Routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import Cases from "./Routes/Cases.jsx";
import Services from "./Routes/Services.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";
const router = createBrowserRouter([{
  path: "",
  element: dom(AppProvider, null, dom(App, null)),
  errorElement: dom(ErrorPage, null),
  // loader: rootLoader,
  children: [{
    path: "/",
    element: dom(Home, null)
  }, {
    path: "contact",
    element: dom(Contact, null)
  }, {
    path: "Cases",
    element: dom(Cases, null)
  }, {
    path: "Services",
    element: dom(Services, null)
  }]
}]);
ReactDOM.createRoot(document.getElementById("root")).render(dom(React.StrictMode, null, dom(RouterProvider, {
  router: router
})));
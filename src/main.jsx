import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Home from "./Routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import Cases from "./Routes/Cases.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <AppProvider>
        <App />
      </AppProvider>
    ),
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Cases",
        element: <Cases />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

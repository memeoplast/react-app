import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Home from "./Routes/Home.jsx";
import { Contact } from "./routes/Contact.jsx";
import Cases from "./Routes/Cases/Cases.jsx";
import Services from "./Routes/Services.jsx";
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
      { path: "Services", element: <Services /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

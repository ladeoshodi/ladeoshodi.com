import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/AboutMe.jsx";
import App from "./App.jsx";
import "./index.css";

const baseUrl = "ladeoshodi.com";

const router = createBrowserRouter([
  {
    path: `/${baseUrl}`,
    element: <App baseUrl={baseUrl} />,
  },
  {
    path: `/${baseUrl}/about-me`,
    element: <AboutMe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

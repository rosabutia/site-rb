import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Layout from "./pages/Layout.jsx";
import Photos from "./pages/Photos.jsx";
import PhotosChale1 from "./pages/PhotosChale1.jsx";
import PhotosChale2 from "./pages/PhotosChale2.jsx";
import PhotosChale3 from "./pages/PhotosChale3.jsx";
import Infra from "./pages/Infra.jsx";
import Local from "./pages/Local.jsx";
import NoPage from "./pages/NoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Photos /> },
      { path: "photoschale1", element: <PhotosChale1 /> },
      { path: "photoschale2", element: <PhotosChale2 /> },
      { path: "photoschale3", element: <PhotosChale3 /> },
      { path: "infra", element: <Infra /> },
      { path: "local", element: <Local /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

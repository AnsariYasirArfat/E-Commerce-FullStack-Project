import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";

import MainBody from "./Components/MainBody";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ProductList from "./Components/ProductList";
import ProductPage from "./Components/ProductPage";

const MainSection = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<MainBody />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="product" element={<ProductList />} />
        <Route path="productpage" element={<ProductPage />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={MainSection} />
    </ThemeProvider>
  </React.StrictMode>
);

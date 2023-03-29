import "./App.css";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { createRoutesFromElements, RouterProvider } from "react-router";

// Pages
import NavBar from "./NavBar";
import Carousal from "./Carousal";
import Services from "./Services";
import Clients from "./Clients";
import Footer from "./Footer";
import Photography from "./Photography";
import Contact from "./Contact";
import RootLayout from "./RootLayout";
import Cinematography from "./Cinematography";
import Photobooth from "./Photobooth";
import Dj from "./Dj";
import GeneralContact from "./GeneralContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route
        index
        element={
          <>
            <Carousal />
            <Services />
          </>
        }
      />
      <Route
        path="photography"
        element={
          <>
            <Photography />
            <Contact service="Photography" />
          </>
        }
      />
      <Route
        path="cinematography"
        element={
          <>
            <Cinematography />
            <Contact service="Cinematography" />
          </>
        }
      />
      <Route
        path="photobooth"
        element={
          <>
            <Photobooth />
            <Contact service="photobooth" />
          </>
        }
      />
      <Route
        path="dj"
        element={
          <>
            <Dj />
            <Contact service="Dj" />
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <GeneralContact />
          </>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* Logo animation */}

      <RouterProvider router={router} />
      {/* Add these links: Facebook, insta, twitter, youtube */}
      {/* General Contact page, and link all get started buttons */}
    </div>
  );
}

export default App;

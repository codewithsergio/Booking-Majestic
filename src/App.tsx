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
            <Contact />
          </>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* Add sticky navbar */}
      {/* Logo animation */}
      {/* <Carousal />
      <Services /> */}

      <RouterProvider router={router} />
      {/* Add these links: Facebook, insta, twitter, youtube */}
    </div>
  );
}

export default App;

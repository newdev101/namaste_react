import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Instamart from "./components/Instamart";
import Cart from "./components/Cart";
import ProfileClassed from "./components/ProfileClassed";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
            path: "/instamart",
            element: <Instamart />,
      },
      {
            path: "/cart",
            element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },

    ],
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

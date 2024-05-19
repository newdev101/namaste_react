import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import Footer from "./components/Footer";
/*
              Header
                    - Logo
                    - Navitems
                    - Cart
              Body
                    - Search
                    - ReastaurantList
                         - Restaurant card
                         - image
                         - name
                         - rarting
                         - cousine
              Footer
                    - links
                    - copyrights

            */

const AppLayout = () => {
  return (
     <>
     <Header />
     <Body />
     <Footer />
     </>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

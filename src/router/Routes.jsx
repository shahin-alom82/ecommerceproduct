import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../compotents/Home";
import About from "../compotents/About";
import ProductDetails from "../compotents/ProductDetails";
import Contact from "../compotents/Contact";
import AllProduct from "../compotents/AllProduct";
import CartProduct from "../compotents/Cart/CartProduct";


const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: "/",
                        element: <Home />
                  },
                  {
                        path: "/about",
                        element: <About />
                  },
                  {
                        path: "/contact",
                        element: <Contact />
                  },
                  {
                        path: "/details/:_id",
                        element: <ProductDetails />
                  },
                  {
                        path: "/allproduct",
                        element: <AllProduct />
                  },
                  {
                        path: "/cart",
                        element: <CartProduct />
                  }
            ]
      }
])
export default router;
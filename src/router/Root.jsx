import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../compotents/Header";
import Footer from "../compotents/Footer";

const Root = () => {
      return (
            <div className="font-bodyFont">
                  <Header />
                  <Outlet />
                  <ScrollRestoration />
                  <Footer />
            </div>
      );
};

export default Root;
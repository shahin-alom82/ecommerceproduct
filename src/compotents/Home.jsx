import Banner from "./Banner";
import BannerThree from "./BannerThree";
import BannerTwo from "./BannerTwo";
import Category from "./Category";
import ProductCarts from "./ProductCarts";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <BannerTwo />
                  <ProductCarts />
                  <Category />
                  <BannerThree />
            </div>
      );
};

export default Home;
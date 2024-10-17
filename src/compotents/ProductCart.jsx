import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddCartButton from "./AddCartButton";
import PriceFormate from "./PriceFormate";

const ProductCart = ({ product }) => {
      return (
            <div className="border border-gray-300 rounded relative">
                  <Link to={`/details/${product._id}`}>
                        <img src={product?.image} className="lg:h-52 w-full h-40 p-2" alt="productImage" />
                  </Link>
                  <div className="px-4 py-2">
                        <h1 className="text-[12px] text-gray-600 font-medium hidden md:block">MRP <span className="line-through text-red-400">{product?.oldPrice}</span> Offer Price</h1>
                        <h1 className="mt-1 lg:text-[18px] text-gray-600 font-medium text-sm"> <PriceFormate amount={product?.price} /> </h1>
                        <h1 className="lg:text-[15px] text-[12px] text-gray-700 mb-2 mt-1 hidden md:block">{product?.title.slice(0, 20)}...</h1>
                        {/* Add To Cart Button */}
                        <AddCartButton product={product} />
                  </div>
                  <div className="flex items-center absolute top-2 right-2">
                        {Array.from({ length: product.rating }, (_, index) => (
                              <span key={index} className="text-orange-300">
                                    <FaStar size={12} />
                              </span>
                        ))}
                  </div>

            </div>
      );
};

export default ProductCart;

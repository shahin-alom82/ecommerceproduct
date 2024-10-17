import { FaStar } from "react-icons/fa6";
import Container from "./Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BannerThree from "./BannerThree";
import { IoCheckmarkSharp } from "react-icons/io5";
import AddCartButton from "./AddCartButton";
import PriceFormate from "./PriceFormate";

const ProductDetails = () => {

      const { _id } = useParams();
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchProduct = async () => {
                  try {
                        const response = await fetch(`https://shoppingapi.vercel.app/shahin`);
                        const data = await response.json();
                        console.log("API response data:", data);

                        const foundProduct = data.find(item => item._id === _id);
                        console.log("Found product:", foundProduct);

                        setProduct(foundProduct);
                  } catch (error) {
                        console.error("Error fetching product", error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchProduct();
      }, [_id]);


      //* Loading State *\\
      if (loading) return (
            <div className="flex items-center justify-center gap-4 lg:py-40 py-10 text-2xl text-gray-700">
                  <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
      );

      //* Not Found State *\\
      if (!product) return (
            <p className="lg:text-3xl text-xl text-gray-600 font-medium text-center lg:py-40 py-10">
                  Product not found!
            </p>
      );

      //* Calculation *\\
      const discount = (Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100));

      return (
            <div className="lg:py-10">
                  <Container className={"border-b border-gray-200 border-t"}>
                        <div className="flex flex-col lg:flex-row gap-10 py-6">
                              <div className="lg:w-2/6 w-full">
                                    <img
                                          src={product.image}
                                          className="lg:h-72 lg:w-80 w-56 h-48 rounded items-center mx-auto justify-center text-center"
                                          alt="productImage"
                                    />
                              </div>
                              <div className="lg:w-4/6">
                                    <h1 className="lg:text-2xl text-[22px] tracking-wide font-medium text-gray-800">
                                          {product.title}
                                    </h1>
                                    <h1 className="mt-2 text-gray-700 lg:text-[16px] text-[14px]">{product.description}</h1>
                                    <h1 className="mt-2 text-gray-700">Category: {product.category}</h1>
                                    <div className="flex items-center mt-2">
                                          {Array.from({ length: product.rating }, (_, index) => (
                                                <span key={index} className="text-orange-400">
                                                      <FaStar size={20} />
                                                </span>
                                          ))}
                                    </div>
                                    <p className="flex items-center gap-2 text-gray-600 mt-2">
                                          <IoCheckmarkSharp className="text-green-700" />
                                          In Stock
                                    </p>
                                    <div className="flex items-center gap-4">
                                          {product.oldPrice && (
                                                <h1 className="mt-2 lg:text-[18px] text-[14px] text-gray-500 line-through">
                                                      <PriceFormate amount={product?.oldPrice} />
                                                </h1>
                                          )}
                                          <h1 className="mt-2 lg:text-[18px] text-[14px] text-gray-500"><PriceFormate amount={product?.price} /></h1>
                                    </div>
                                    <div className="flex items-center gap-10 mt-1">
                                          <h1 className="text-gray-600 text-[14px]">Saving : {discount}%</h1>
                                          <h1 className="text-gray-600 text-[14px]">Free Shipping</h1>
                                    </div>
                                    <AddCartButton className={"w-36 mt-2 text-center items-center justify-center "} product={product} />
                              </div>
                        </div>
                  </Container>
                  <BannerThree />
            </div>
      );
};

export default ProductDetails;

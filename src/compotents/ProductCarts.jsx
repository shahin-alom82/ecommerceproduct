import { useEffect, useState } from "react";
import Container from "./Container";
import ProductCart from "./ProductCart";

const ProductCarts = () => {
      
      const [product, setProduct] = useState([])
      useEffect(() => {
            fetch("https://shoppingapi.vercel.app/shahin")
                  .then(res => res.json())
                  .then(data => setProduct(data))
                  .catch((error) => {
                        console.error(error);
                  });
      }, [])

      return (
            <div>
                  <div>
                        <Container>
                              <div className="text-center py-10">
                                    <h1 className="lg:text-2xl text-xl tracking-wide font-medium text-gray-700 uppercase">Top Product to Shopping</h1>
                                    <p className="lg:text-[14px] text-xs mt-2 text-gray-800">Simply browse through our extensive list of trusted product.</p>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 gap-2">
                                    {
                                          product.slice(0, 20).map((item) => <ProductCart key={item?._id} product={item} />)
                                    }
                              </div>

                        </Container>
                  </div>
            </div>
      );
};

export default ProductCarts;
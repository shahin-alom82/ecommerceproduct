import { useEffect, useState } from "react";
import Container from "./Container";
import SearchInput from "./SearchInput";
import ProductCart from "./ProductCart";

const AllProduct = () => {
      const [category, setCategory] = useState('all');
      const [products, setProducts] = useState([]);
      const [filteredProducts, setFilteredProducts] = useState([]);

      useEffect(() => {
            const getProducts = async () => {
                  try {
                        const response = await fetch("https://shoppingapi.vercel.app/shahin");
                        const productData = await response.json();
                        setProducts(productData);
                        setFilteredProducts(productData);
                  } catch (error) {
                        console.error("Error fetching products", error);
                  }
            };
            getProducts();
      }, []);

      useEffect(() => {
            if (category === 'all') {
                  setFilteredProducts(products);
            } else {
                  const filtered = products.filter((item) =>
                        item.category.toLowerCase() === category.toLowerCase()
                  );
                  setFilteredProducts(filtered);
            }
      }, [category, products]);

      const sideNav = [
            { title: "All", path: "all" },
            { title: "Watch", path: "watch" },
            { title: "Electric", path: "electric" },
            { title: "Furniture", path: "furniture" },
            { title: "Mobile", path: "mobile" },
      ];

      return (
            <Container className={"py-5"}>

                  {/* Top Bar Start */}
                  <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-4 relative">
                        <h1 className="text-sm tracking-wide text-gray-700 text-center lg:text-left">
                              Browse through the products specialist.
                        </h1>
                        {/* Search Input */}
                        <SearchInput />
                  </div>
                  {/* Top Bar End */}

                  <div className="lg:flex flex-row lg:gap-5">
                        {/* Sidebar */}
                        <h1 className="md:hidden block text-sm text-gray-500 tracking-wide mt-5">Product Filter</h1>
                        <div className="w-full lg:w-1/6 mt-5 flex flex-row lg:flex-col lg:gap-4 gap-2 text-start cursor-pointer">
                              {sideNav.map((item, index) => (
                                    <button
                                          key={index}
                                          onClick={() => setCategory(item.path)}
                                          className={`border border-gray-300 px-2 lg:text-sm text-[10px] py-1 rounded text-gray-700 uppercase ${category === item.path ? 'bg-gray-300' : ''}`}
                                    >
                                          {item.title}
                                    </button>
                              ))}
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4 py-5 w-full lg:w-5/6">
                              {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item) =>
                                          <ProductCart key={item?._id} product={item} />
                                    )
                              ) : (
                                    <p className='lg:text-2xl text-center text-gray-700 tracking-wide font-medium'>Product Not found.</p>
                              )}
                        </div>
                  </div>
            </Container>
      );
};

export default AllProduct;

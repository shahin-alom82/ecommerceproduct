
import { LuMoveRight } from "react-icons/lu";
import Container from "./Container";
import { man } from "../assets";

const About = () => {
      return (
            <div className="py-10">
                  <Container>
                        {/* About Section start */}
                        <div>
                              <div>
                                    <h1 className="uppercase lg:text-2xl text-xl text-center font-semibold "><span className="text-gray-500">About</span> <span className="text-gray-800">Us</span></h1>
                              </div>
                              <div className="py-10 flex  flex-col lg:flex-row gap-16">
                                    <img className="h-[380px] w-[330px]" src={man} alt="img" />
                                    <div className="mt-6 text-sm">
                                          <h1 className="text-gray-700 tracking-wide">
                                                E-commerce refers to the buying and selling of goods or services online, allowing businesses and consumers to transact without physical stores. It involves online.</h1>
                                          <h1 className="text-gray-700 tracking-wide mt-2">stores, payment gateways, shipping, and customer support. Popular models include B2C, B2B, C2C, and C2B. E-commerce offers convenience, variety, and global reach but faces challenges like security and logistics. As technology advances, e-commerce continues to grow with innovations like mobile shopping and AI-driven personalization.</h1>
                                          <div className="mt-4">
                                                <h1 className="text-[18px] font-semibold text-gray-600 uppercase">Our Visit</h1>
                                                <h1 className="text-gray-700 tracking-wide mt-3">
                                                      A website visit refers to when a user accesses a website by typing its URL, clicking a link, or finding it through search engines. During the visit, users can browse pages, interact with content, and engage with features like shopping, forms, or media.</h1>
                                                <h1 className="text-gray-700 tracking-wide mt-2">Website visits are tracked using analytics tools to measure user activity, such as time spent, pages viewed, and actions taken. High-quality visits often result in conversions like purchases or sign-ups. The overall goal is to provide users with a seamless experience that meets their needs.</h1>
                                          </div>
                                          <button className="flex items-center gap-2 border border-gray-400 text-gray-700 lg:px-4 lg:text-[16px] text-sm lg:py-2 lg:mt-6 px-2 py-1 mt-4">Explore Now <LuMoveRight />
                                          </button>
                                    </div>
                              </div>
                        </div>
                        {/* About Section End */}
                        <div>
                              <div>
                                    <h1 className="lg:text-2xl text-xl font-medium">WHY <span className="text-gray-700">CHOOSE US</span>
                                    </h1>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-10 lg:gap-0 gap-4">
                                          {/* Electronics Product  */}
                                          <div className="lg:border-t lg:border-b border lg:border-l border-gray-300 py-8 px-6 cursor-pointer duration-300">
                                                <h1 className="text-xl font-medium tracking-wide text-gray-900 duration-300">Electronics Products : </h1>
                                                <h1 className="mt-2 duration-300 text-gray-700 tracking-wide text-sm">E-commerce electronics enables convenient online purchasing of devices like smartphones, laptops, and appliances with home delivery.</h1>
                                          </div>
                                          {/* LED TV Product */}
                                          <div className="lg:border-t lg:border-b lg:border-l border border-gray-300 py-8 px-6 cursor-pointer  duration-300">
                                                <h1 className="text-xl font-medium tracking-wide text-gray-900  duration-300 ">LED TV Products : </h1>
                                                <h1 className="mt-2  duration-300 text-gray-700 tracking-wide  text-sm">
                                                      E-commerce LED TV sales allow customers to easily purchase a wide range of LED televisions online with home delivery and competitive pricing.</h1>
                                          </div>
                                          {/* Watch Products */}
                                          <div className="lg:border border border-gray-300 py-8 px-6 cursor-pointer duration-300">
                                                <h1 className="text-xl font-medium tracking-wide text-gray-900  duration-300">Watch Products : </h1>
                                                <h1 className="mt-2 text-gray-700 tracking-wide text-sm">
                                                      E-commerce watch sales offer a variety of watches online, allowing customers to browse, compare, and purchase with convenient delivery options.</h1>
                                          </div>
                                          {/* Furniture Products */}
                                          <div className="lg:border-b border lg:border-r lg:border-l border-gray-300 py-8 px-6 cursor-pointer  duration-300">
                                                <h1 className="text-xl font-medium tracking-wide text-gray-900  duration-300">Furniture Products : </h1>
                                                <h1 className="mt-2 duration-300 text-gray-700 tracking-wide  text-sm">
                                                      E-commerce furniture sales provide a wide selection of furniture online, offering customers the convenience of browsing, purchasing, and home delivery.</h1>
                                          </div>
                                          {/* Head Phone Products */}
                                          <div className="lg:border-b border lg:border-r border-gray-300 py-8 px-6 cursor-pointer  duration-300">
                                                <h1 className="text-xl font-medium tracking-wide text-gray-900  duration-300">Head Phone Products : </h1>
                                                <h1 className="mt-2  duration-300 text-gray-700 tracking-wide  text-sm">
                                                      E-commerce headphone sales offer a range of headphones online, allowing customers to easily compare features and prices with convenient home delivery.</h1>
                                          </div>
                                          {/* All Products */}
                                          <div className="lg:border-b border lg:border-r border-gray-300 py-8 px-6 cursor-pointer duration-300">
                                                <h1 className="text-xl duration-300 font-medium tracking-wide text-gray-900 "> Products Delivery : </h1>
                                                <h1 className="mt-2 duration-300 text-gray-700 tracking-wide text-sm">
                                                      E-commerce all products encompass a diverse range of items available online, enabling customers to browse, compare, and purchase anything from electronics to fashion with convenient delivery options.</h1>
                                          </div>
                                    </div>


                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default About;
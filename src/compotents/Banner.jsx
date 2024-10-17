import { LuMoveRight } from "react-icons/lu";
import { banner, group1, group2, group3, group4, group5 } from "../assets";

const Banner = () => {
      return (
            <div>
                  {/* Banner Section Start */}
                  <div>
                        <img className='lg:w-full lg:h-[550px] h-48 relative' src={banner} alt="bannerImage" />
                        <div className="absolute lg:top-48 top-24 lg:left-32 left-2 text-white">
                              <h1 className="lg:text-[16px] text-sm">Starting at $ 270.00</h1>
                              <div className="lg:text-5xl text-xl lg:font-bold tracking-wide lg:mt-4 mt-2 lg:mb-4 mb-2 uppercase">
                                    <h1>The best tablet</h1>
                                    <h1 className='lg:mt-2'>Collection 2024</h1>
                              </div>
                              <i className="lg:text-xl text-sm tracking-wide">Exclusive offer <span className="text-yellow-700 font-medium mt-6">- 30%</span> off this week</i>
                              <button className="flex items-center gap-2 bg-white text-gray-700 lg:px-4 lg:text-[16px] text-sm lg:py-2 lg:mt-6 px-2 py-1 mt-4">Shop Now <LuMoveRight />
                              </button>
                        </div>
                  </div>
                  {/* Banner Section End */}


                  {/* Group Section Start */}
                  <div className="max-w-screen-md mx-auto lg:px-0 px-10">
                        <div className="text-center mt-8">
                              <h1 className='lg:text-2xl font-medium text-xl text-gray-600 tracking-wide uppercase'>Find by Speciality</h1>
                              <p className='mt-4 text-gray-700 text-sm tracking-wide'>Simply browse through our extensive list of trusted Product, <br /> schedule your appointment hassle-free.</p>
                        </div>
                        <div className='grid lg:grid-cols-5 grid-cols-2 md:grid-cols-5 items-center gap-4 py-10'>
                              <div>
                                    <img className='h-28 w-28 rounded-full' src={group1} alt="groupimg" />
                                    <h1 className='text-[14px] mt-2 text-gray-700'>Electric Product</h1>
                              </div>
                              <div>
                                    <img className='h-28 w-28 rounded-full' src={group2} alt="groupimg" />
                                    <h1 className='text-[14px] mt-2 text-gray-700'>Furniture Product</h1>
                              </div>
                              <div>
                                    <img className='h-28 w-28 rounded-full' src={group3} alt="groupimg" />
                                    <h1 className='text-[14px] mt-2 text-gray-700'>Mobile Product</h1>
                              </div>
                              <div>
                                    <img className='h-28 w-28 rounded-full' src={group4} alt="groupimg" />
                                    <h1 className='text-[14px] mt-2 text-gray-700'>LED TV Product</h1>
                              </div>
                              <div>
                                    <img className='h-28 w-28 rounded-full' src={group5} alt="groupimg" />
                                    <h1 className='text-[14px] mt-2 text-gray-700'>Watch Product</h1>
                              </div>
                        </div>
                  </div>
                  {/* Group Section End */}
            </div>
      );
};

export default Banner;
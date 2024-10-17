import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import { MdOutlineAddLocationAlt, MdOutlineAttachEmail } from "react-icons/md";
import Container from "./Container";
import { Link } from "react-router-dom";
import { payment } from "../assets";

const Footer = () => {
      return (
            <div className="">
                  <Container className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 items-center justify-between py-14 border-b border-gray-400">
                        <div>
                              <Link to={"/"}>
                                    <h1 className="text-2xl font-semibold">
                                          <span className="text-blue-600">PRODUCT</span>
                                          <span className="text-gray-700">BD</span>
                                    </h1>
                              </Link>
                              <h1 className="mt-6 text-gray-800">
                                    We are a team of designers and <br /> developers that create high quality <br /> WordPress
                              </h1>
                              <div className="flex items-center gap-4 mt-6">
                                    <div className="border-2 border-gray-300 py-2 px-2 text-gray-800 cursor-pointer duration-300">
                                          <FaFacebookF size={20} />
                                    </div>
                                    <div className="border-2 border-gray-300 py-2 px-2 text-gray-800 cursor-pointer duration-300">
                                          <FaTwitter size={20} />
                                    </div>
                                    <div className="border-2 border-gray-300 py-2 px-2 text-gray-800 cursor-pointer duration-300">
                                          <FaLinkedinIn size={20} />
                                    </div>
                                    <div className="border-2 border-gray-300 py-2 px-2 text-gray-800 cursor-pointer duration-300">
                                          <SiInstagram size={20} />
                                    </div>
                              </div>
                        </div>
                        <div className="lg:ml-8">
                              <h1 className="text-[22px] font-medium">My Account</h1>
                              <div className="mt-6 space-y-4 text-gray-700">
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Shipping
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Wishlist
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          My Account
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Order History
                                    </p>
                              </div>
                        </div>
                        <div className="lg:ml-8">
                              <h1 className="text-[22px] font-medium">Information</h1>
                              <div className="mt-6 space-y-4 text-gray-700">
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Our Story
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Terms & Conditions
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Latest News
                                    </p>
                                    <p className="flex items-center gap-2 cursor-pointer duration-300 hover:text-bannercyan/80">
                                          <GoDotFill size={8} />
                                          Contact Us
                                    </p>
                              </div>
                        </div>
                        <div>
                              <h1 className="text-[22px] font-medium">Talk To Us</h1>
                              <div className="mt-6 space-y-3">
                                    <p className="text-gray-700">Got Questions? Call us</p>
                                    <p className="text-xl font-medium">+670 413 90 762</p>
                                    <p className="text-gray-700 flex items-center gap-3">
                                          <MdOutlineAttachEmail size={20} />
                                          shahinalom3511371@gmail.com
                                    </p>
                                    <p className="text-gray-700 flex items-center gap-3">
                                          <MdOutlineAddLocationAlt size={20} />
                                          79 Sleepy. Jamaica, New York 1432
                                    </p>
                              </div>
                        </div>
                  </Container>
                  <Container className="lg:flex md:flex-row items-center justify-between py-3">
                        <p className="text-gray-800 text-sm">
                              © 2024 All Rights Reserved | HTML Template by Themepure.
                        </p>
                        <div>
                              <img className="h-10 w-72 rounded-full" src={payment} alt="paymentimg" />
                        </div>
                  </Container>
            </div>
      );
};

export default Footer;

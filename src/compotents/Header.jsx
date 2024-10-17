import { FaUserAlt } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
      const { cart } = useSelector((state) => state.cart)
      const nav = [
            { title: "HOME", path: "/" },
            { title: "ALL PRODUCTS", path: "/allproduct" },
            { title: "ABOUT", path: "/about" },
            { title: "CONTACT", path: "/contact" }
      ]
      return (
            <div className="border-b border-gray-300 py-4 sticky z-50 top-0 bg-white opacity-85">
                  <Container className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href={"/"}>
                              <h1 className="lg:text-2xl text-[22px] font-semibold"><span className="text-blue-600">PRODUCT</span><span className="text-gray-700">BD</span></h1>
                        </Link>

                        {/* Navigation Links */}
                        <div className="md:flex hidden gap-x-10 ">
                              {nav.map((item, index) => (
                                    <NavLink
                                          to={item.path}
                                          key={index}
                                          className={({ isActive }) =>
                                                isActive
                                                      ? "text-blue-700 font-medium"
                                                      : "text-gray-700 font-medium"
                                          }
                                    >
                                          {item.title}
                                    </NavLink>
                              ))}
                        </div>

                        {/* User & Cart Icons */}
                        <div className="lg:flex items-center gap-8 relative hidden md:block">
                              <div className="lg:flex items-center gap-4 ">
                                    <FiPhone className="text-blue-700" size={30} />
                                    <div className="text-gray-700 text-sm tracking-wide ">
                                          <h1>+00883445645</h1>
                                          <h1>saqay@gmail.com</h1>
                                    </div>
                              </div>
                              <FaUserAlt size={25} className="rounded-full text-gray-700" />
                              <BsCartCheckFill size={25} className="text-gray-700" />
                              <Link to={"/cart"}>
                                    <span className="absolute right-9 lg:bottom-7 bottom-5 h-4 w-4 flex text-[14px] font-medium text-blue-700 items-center justify-center rounded-full">{cart.length}</span>
                              </Link>
                        </div>
                        {/* Mobile Navigation */}
                        <div className="md:hidden relative">
                              <BsCartCheckFill size={25} className="text-gray-700" />
                              <Link to={"/cart"}>
                                    <span className="absolute right-1 lg:bottom-7 bottom-5 h-4 w-4 flex text-[14px] font-medium text-blue-700 items-center justify-center rounded-full">{cart.length}</span>
                              </Link>
                        </div>


                  </Container>
                  {/* Mobile Navigation */}

                  <div className="flex md:hidden justify-around mt-4 text-sm">
                        {nav.map((item, index) => (
                              <NavLink
                                    to={item.path}
                                    key={index}
                                    className={({ isActive }) =>
                                          isActive
                                                ? "text-blue-700 font-medium"
                                                : "text-gray-700 font-medium"
                                    }
                              >
                                    {item.title}
                              </NavLink>
                        ))}
                  </div>
            </div>
      );
};

export default Header;

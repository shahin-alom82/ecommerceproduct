import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { IoClose } from "react-icons/io5";
import { productDelete } from "../../redux/productSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import AddCartButton from "../AddCartButton";
import PriceFormate from "../PriceFormate";

const CartProduct = () => {
      const { cart } = useSelector((stete) => stete.cart)
      const dispatch = useDispatch()
      return (
            <div className="lg:py-16">
                  <Container>
                        {
                              cart.length ?
                                    <div>
                                          <div>
                                                {
                                                      <div className="overflow-x-auto mt-10 ">
                                                            <table className="min-w-full">
                                                                  <thead className="">
                                                                        <tr className="text-sm border text-blue-700 border-gray-300">

                                                                              <th className="px-4 py-2 text-left">Image</th>
                                                                              <th className="px-4 py-2 text-left">Name</th>
                                                                              <th className="px-4 py-2 text-left">Category</th>
                                                                              <th className="px-4 py-2 text-left">Quantity</th>
                                                                              <th className="px-4 py-2 text-left">Price</th>
                                                                              <th className="px-4 py-2 text-left">Remove</th>
                                                                        </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                        {cart.map((item) => (
                                                                              <tr className="border border-gray-300" key={item.id}>
                                                                               

                                                                                    <td className="px-4 py-2">
                                                                                          <Link to={`/details/${item._id}`}>
                                                                                                <img className="lg:h-28 lg:w-36" src={item?.image} alt="img" height={400} width={400} />
                                                                                          </Link>
                                                                                    </td>

                                                                                    <td className="px-4 py-2 lg:text-xl text-sm">{item?.title.slice(0, 13)}</td>
                                                                                    <td className="px-4 py-2 lg:text-xl text-sm">{item?.category}</td>
 
                                                                                    <td className="px-4 py-2">
                                                                                          <AddCartButton product={item} />
                                                                                    </td>

                                                                                    <td className="px-4 py-2 lg:text-xl text-sm">
                                                                                          <PriceFormate amount={item.price * item.quantity} />
                                                                                    </td>
                                                                                    <td className="px-4 py-2 hover:text-red-600 cursor-pointer">
                                                                                          <IoClose
                                                                                                onClick={() => dispatch(productDelete(item._id), toast.success(`${item?.title.slice(0, 10)} deleted successfully!`))}
                                                                                                className="text-gray-700 cursor-pointer"
                                                                                                size={20}
                                                                                          />
                                                                                    </td>
                                                                              </tr>
                                                                        ))}
                                                                  </tbody>
                                                            </table>
                                                      </div>

                                                }
                                          </div>
                                          {/* Cart Summary */}
                                          {/* Cart Summary */}
                                          <CartSummary />
                                    </div>
                                    :
                                    <div className="max-w-screen-md text-center mx-auto py-10">
                                          <h1 className="lg:text-2xl text-xl text-gray-700 tracking-wide font-medium uppercase">Your Product Cart is impty</h1>
                                          <p className="mt-2 text-gray-700 text-sm">Adding items to your cart and discover amazing <br />products and deals tailored just</p>
                                          <div className="flex text-center gap-4 mx-auto items-center justify-center mt-4 text-white">
                                                <Link to={"/allproduct"}>
                                                      <button className="bg-green-500 text-sm py-1 px-2">Product Added</button>
                                                </Link>
                                                <Link to={"/"}>
                                                      <button className="bg-blue-500 text-sm py-1 px-2">Go To Home</button>
                                                </Link>
                                          </div>
                                    </div>
                        }
                  </Container>
            </div>
      );
};

export default CartProduct;
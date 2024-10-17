import { useDispatch, useSelector } from "react-redux";
import { addCart, decrese, increse } from "../redux/productSlice";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { HiMiniMinus } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import toast from "react-hot-toast";


const AddCartButton = ({ product, className }) => {
      //* Product Add *\\
      const dispatch = useDispatch()
      const handleAddToCart = () => {
            dispatch(addCart(product))
      }

      const [existingProduct, setExistingProduct] = useState()
      const { cart } = useSelector((state) => state.cart)
      useEffect(() => {
            const avilableProduct = cart.find((item) => item._id === product._id)
            setExistingProduct(avilableProduct)
      }, [cart, product])

      //* increment decrement *\\
      const handlePlus = () => {
            dispatch(decrese(product._id))
            toast.success("Quantity increase successfully!")
      }
      const handleMinus = () => {
            if (existingProduct.quantity > 1) {
                  dispatch(increse(product._id))
                  toast.success("Quantity decrease successfully!")
            }
      }
      return (
            <div>
                  {
                        existingProduct ?
                              //* increment decrement *\\
                              <div className="flex items-center justify-between  bg-red-200 w-32 mt-4 rounded-full cursor-pointer">
                                    <span onClick={handleMinus} className="bg-gray-100 rounded-full py-1.5 px-1.5 text-gray-600">
                                          <HiMiniMinus />
                                    </span>
                                    <span className="text-blue-700 font-medium">{existingProduct.quantity}</span>
                                    <span onClick={handlePlus} className="bg-gray-100 rounded-full py-1.5 px-1.5 text-gray-600 cursor-pointer">
                                          <LuPlus />
                                    </span>
                              </div>
                              :
                              //* Add To Cart Button *\\
                              <div className={twMerge("text-gray-700", className)}>
                                    <div className="flex items-center gap-[1px] mt-1 h-10">
                                          <button onClick={handleAddToCart} className="border w-full rounded-full text-gray-700 border-blue-500 py-1 px-2.5 text-sm">
                                                Add To Cart
                                          </button>
                                    </div>
                              </div>
                  }
            </div>
      );
};

export default AddCartButton;
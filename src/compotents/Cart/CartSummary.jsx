import { useSelector } from "react-redux";
import Container from "../Container";
import PriceFormate from "../PriceFormate";
import { useEffect, useState } from "react";

const CartSummary = () => {

      const { cart } = useSelector((stete) => stete.cart)
      const [amount, setAmount] = useState(0);

      useEffect(() => {
            let amt = 0;
            cart.map((item) => {
                  amt += item.price * item.quantity;
                  return;
            });
            setAmount(amt);
      }, [cart]);
      return (
            <div>
                  <div className="py-10">
                        <Container className="max-w-screen-md mx-auto">
                              <div className="border border-gray-300 px-4 py-2 sm:gap-6 h-48 lg:col-span-5 mt-4 lg:mt-0 text-2xl">
                                    <h2 className="text-2xl font-medium text-gray-800">
                                          Order summary
                                    </h2>
                                    <div className="mt-2">
                                          <div className="flex items-center justify-between mt-6">
                                                <p className="text-[16px] font-medium text-gray-900">
                                                      Payable total
                                                </p>
                                                <p className="text-sm font-medium text-gray-900"><PriceFormate className=" text-xl text-green-500 font-medium" amount={amount} /></p>
                                          </div>
                                          <div className="mt-10">
                                                <button className="w-full ">
                                                      <p className="px-6 py-0.5 bg-red-200 text-gray-600 rounded-full text-[16px]">
                                                            Payment
                                                      </p>
                                                </button>
                                          </div>

                                    </div>

                              </div>
                        </Container>
                  </div>
            </div>
      );
};

export default CartSummary;
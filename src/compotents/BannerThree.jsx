import { app, play } from "../assets";

const BannerThree = () => {
      return (
            <div className="py-6 bg-[#678e61] mt-14">
                  <div className=" inset-0 flex flex-col items-center justify-center text-center">
                        <h1 className="uppercase lg:text-2xl text-[16px] text-gray-800">
                              Get Notified About New Products
                        </h1>
                        <input
                              className="border border-gray-300 text-gray-600 py-1 px-4 rounded-full lg:w-[430px] w-[250px] outline-none mt-2"
                              type="text"
                        />
                        <div className="flex mt-4 gap-4">
                              <img className="lg:h-8 lg:w-28 h-6 w-24" src={app} alt="app" />
                              <img className="lg:h-8 lg:w-28 h-6 w-24" src={play} alt="play" />
                        </div>
                  </div>
            </div>

      );
};

export default BannerThree;
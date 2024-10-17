import { app, orangebanner, play } from "../assets";

const BannerThree = () => {
      return (
            <div className="relative py-10 hidden lg:block">
                  <img className="lg:w-full h-40" src={orangebanner} alt="orange-banner" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <h1 className="uppercase lg:text-2xl text-xl text-gray-800">
                              Get Notified About New Products
                        </h1>
                        <input
                              className="border border-gray-300 text-gray-600 py-1 px-4 rounded-full w-[430px] outline-none mt-2"
                              type="text"
                        />

                        <div className="flex flex-col lg:flex-row mt-4 gap-4">
                              <img className="h-8 w-28" src={app} alt="app" />
                              <img className="h-8 w-28" src={play} alt="play" />
                        </div>
                  </div>
            </div>

      );
};

export default BannerThree;
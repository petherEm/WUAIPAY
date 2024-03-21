import React from "react";
import { Lock, FileLock2, Globe2 } from "lucide-react";

const SafeBanner = () => {
  return (
    <section className="bg-black text-white flex items-center justify-center mx-auto md:h-[90px] w-full">
      <div className="max-w-6xl mx-auto ">
        <div className="py-3 space-y-3 md:space-y-0 flex flex-col md:flex-row md:items-center flex-between md:space-x-20 font-semibold">
          <div className="flex items-center space-x-3">
            <div className="w-8">
              <Lock className="text-3xl text-yellow-400" />
            </div>
            <p>
              We encrypt <br /> your transfers
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8">
              <FileLock2 className="text-3xl text-yellow-400" />
            </div>

            <p>
              We are committed to <br /> keeping your data secure
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8">
              <Globe2 className="text-3xl text-yellow-400" />
            </div>

            <p>
              We’ve sent money around <br /> the world for over 150 years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeBanner;

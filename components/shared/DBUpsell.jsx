import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const DBUpsell = () => {
  return (
    <section className="bg-white">
      <div className="bg-white flex flex-col md:flex-row justify-between p-4 md:p-14">
        {/* LEFT */}
        <div className="flex-[50%] flex items-end justify-center">
          <Image src="/getWUDB.webp" width={500} height={400} />
        </div>

        {/* RIGHT */}
        <div className="flex-[50%] text-black">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Money transfers and digital banking in one app
          </h1>
          <p className="text-xl mt-10">
            Update your experience with the Western Union Digital Banking app
            and enjoy international money transfers and digital banking all in
            one place.
          </p>

          <div className="mt-10 flex flex-col space-y-6">
            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <Check className="text-3xl text-blue-600" />
              </div>

              <p className="text-md md:text-xl">
                Send money internationally to more than 200 <br />
                countries and territories.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <Check className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Send money instantly and fee-free* to Western Union Digital
                Banking users.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <Check className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Get up to 6% interest** on your savings. Limited time offer
                valid until 31.05.2023.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <Check className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Bank in multiple currencies**.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <Check className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Receive a free Visa Platinum debit card*.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}

      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black w-full text-center md:w-[80%] px-4 md:px-12 py-8 mb-24 rounded-lg">
          <h1 className="text-2xl font-bold text-left text-[#fbd721]">
            Download the Digital Banking app and take advantage of all the
            perks!
          </h1>
          <Button className="text-lg rounded-full bg-transparent border-[1.5px] px-4 py-3">
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DBUpsell;

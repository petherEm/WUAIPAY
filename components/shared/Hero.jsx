import Image from "next/image";
import Link from "next/link";
import HeroPriceComponent from "./HeroPriceComponent";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-[#fbd721] md:min-h-[670px] h-auto">
      <div className="p-2 md:p-0">
        <div className="pt-20 flex flex-col md:flex-row">
          {/* RIGHT SIDE  */}
          <div className="md:px-20 lg:px-42 xl:px-68 md:flex-[60%]">
            <h1 className="text-4xl md:text-6xl font-bold">
              0€ fee on your <span className="italic">first</span>
              <br /> transaction
            </h1>
            <h2 className="text-lg md:text-xl mt-6">
              Send your first online money transfer with 0€ transfer fee. <br />
              Enjoy our great exchange rates and low fees every day.
            </h2>

            <div>
              <HeroPriceComponent />
            </div>
            <div className="mt-4">
              <Button className="w-[150px] rounded-full text-[#fbd721]">
                <Link href="/send-money">Send now</Link>
              </Button>

              <div className="mt-20">
                <h1 className="text-lg md:text-xl">
                  <span className="font-bold">Be informed. Be aware. </span>
                  <span className="underline">
                    Protect yourself from fraud.{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div className="relative w-full h-[600px] md:flex-[40%]">
            <Image src="/hero_lady.webp" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

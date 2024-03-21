import Image from "next/image";
import RTHero from "@/components/shared/RealTime/RTHero";
import SafeBanner from "@/components/shared/SafeBanner";
import DBUpsell from "@/components/shared/DBUpsell";
import RTCompare from "@/components/shared/RealTime/RTCompare";
import WUnderBot from "@/components/shared/WUnderBot";

const RealTimeOptions = () => {
  return (
    <main>
      <RTHero />

      <DBUpsell />
      <RTCompare />
    </main>
  );
};

export default RealTimeOptions;

import Image from "next/image";
import Hero from "@/components/shared/Hero";
import SafeBanner from "@/components/shared/SafeBanner";
import DBUpsell from "@/components/shared/DBUpsell";
import CompareTable from "@/components/shared/CompareTable";
import WUnderBot from "@/components/shared/WUnderBot";

export default function Home() {
  return (
    <main>

      <Hero />
      <SafeBanner />
      {/* <WUnderBot /> */}
      <DBUpsell />
      <CompareTable />
    </main>
  );
}

import Image from "next/image";
import { HeadTitle, HouseCard } from "@/components";

export default function Home() {
  return (
    <main>
      <HeadTitle headTitle="Our Services" />
      <div className="grid grid-cols-3 gap-6 my-5">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </main>
  );
}

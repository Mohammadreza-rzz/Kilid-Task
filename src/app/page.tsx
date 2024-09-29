"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeadTitle, HouseCard } from "@/components";
import { ListingData } from "@/mock";
import { useFilterValue } from "@/store";
import { dataInfo } from "@/types";
import { Virtuoso } from "react-virtuoso";

export default function Home() {
  const [data, setData] = useState<dataInfo[] | null>(ListingData);
  const { filterValue } = useFilterValue() as {
    filterValue: string;
  };

  useEffect(() => {
    if (filterValue === "BUY") {
      setData([...ListingData.filter((items) => items.type === "buy")]);
    } else if (filterValue === "RENT") {
      setData([...ListingData.filter((items) => items.type === "rent")]);
    }
  }, [filterValue]);
  return (
    <main>
      <HeadTitle headTitle="Our Services" />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5 px-4">
        {/* <Virtuoso
          className="!h-screen"
          data={data}
          totalCount={data?.length}
          itemContent={(_: number, items: dataInfo) => (
            <HouseCard
              title={items?.title}
              price={items?.Price}
              srcImage={items?.image}
              rooms={items?.rooms}
              bathrooms={items?.bathrooms}
              garage={+items?.garage}
            />
          )}
        /> */}
        {!!data &&
          !!data.length &&
          data.map((items, index) => (
            <HouseCard
              key={index}
              title={items?.title}
              price={items?.Price}
              srcImage={items?.image}
              rooms={items?.rooms}
              bathrooms={items?.bathrooms}
              garage={+items?.garage}
            />
          ))}
      </div>
    </main>
  );
}

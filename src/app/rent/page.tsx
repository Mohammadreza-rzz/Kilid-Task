import React from "react";
import { getData } from "@/utils/apiFunc";
import { HeadTitle, HouseCard } from "@/components";
import { dataInfo } from "@/types";

const RentPage = async () => {
  const data = await getData("rent");

  return (
    <main>
      <HeadTitle headTitle="Our Services" />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-5 px-4">
        {!!data &&
          !!data.length &&
          data.map((items: dataInfo, index: number) => (
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
};

export default RentPage;

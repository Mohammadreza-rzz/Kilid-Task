"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainPageSlide } from "@/view";
import { Autoplay } from "swiper/modules";
import slidImage1 from "@/public/images/slide-1.jpg";
import slidImage2 from "@/public/images/slide-2.jpg";
import slidImage3 from "@/public/images/slide-3.jpg";
import "swiper/css";

interface IProps {}

const MainPageSLider: React.FC<IProps> = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <SwiperSlide>
            <MainPageSlide>
              <Image
                src={
                  index === 0
                    ? slidImage1
                    : index === 1
                    ? slidImage2
                    : slidImage3
                }
                width={2000}
                height={1200}
                alt="slide"
                className="!w-full object-cover h-[90vh]"
              />
            </MainPageSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainPageSLider;

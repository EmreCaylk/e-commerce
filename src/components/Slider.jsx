import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import newCollectionImage from "../assets/New Collection.jpg";

export default function Slider() {
  return (
    <section className="flex w-full justify-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span
                class="${className} m-0! h-2! w-16! rounded-none! bg-white!"
              ></span>
            `;
          },
        }}
        loop={true}
        className="
          relative w-full max-w-359.75
          [&_.swiper-pagination-bullet]:bg-white!
          [&_.swiper-pagination-bullet]:opacity-40!
          [&_.swiper-pagination-bullet-active]:bg-white!
          [&_.swiper-pagination-bullet-active]:opacity-100!
        "
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="
              relative flex min-h-162.5 w-full items-center
              bg-cover bg-center bg-no-repeat
              lg:aspect-1439/716 lg:min-h-0
            "
            style={{
              backgroundImage: `url("${newCollectionImage}")`,
            }}
          >
            <div
              className="
                relative z-10 flex w-full flex-col items-center
                px-10 text-center text-white
                lg:w-1/2 lg:items-start lg:pl-50 lg:text-left
              "
            >
              <p className="mb-5 text-sm font-bold lg:mb-8 lg:text-base">
                SUMMER 2020
              </p>

              <h1 className="mb-5 text-[40px] font-bold leading-tight lg:mb-8 lg:text-[58px]">
                NEW COLLECTION
              </h1>

              <p className="mb-7 max-w-[320px] text-base leading-7 lg:mb-8 lg:max-w-97.5 lg:text-lg">
                We know how large objects will act, but things on a small scale.
              </p>

              <button
                type="button"
                className="
                  relative z-20 flex cursor-pointer items-center justify-center
                  rounded-md bg-[#2DC071]
                  px-8 py-4 text-base font-bold leading-none text-white
                  lg:px-10 lg:text-lg
                "
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="
              relative flex min-h-162.5 w-full items-center
              bg-cover bg-center bg-no-repeat
              lg:aspect-1439/716 lg:min-h-0
            "
            style={{
              backgroundImage: `url("${newCollectionImage}")`,
            }}
          >
            <div
              className="
                relative z-10 flex w-full flex-col items-center
                px-10 text-center text-white
                lg:w-1/2 lg:items-start lg:pl-50 lg:text-left
              "
            >
              <p className="mb-5 text-sm font-bold lg:mb-8 lg:text-base">
                SUMMER 2020
              </p>

              <h2 className="mb-5 text-[40px] font-bold leading-tight lg:mb-8 lg:text-[58px]">
                NEW COLLECTION
              </h2>

              <p className="mb-7 max-w-[320px] text-base leading-7 lg:mb-8 lg:max-w-97.5 lg:text-lg">
                We know how large objects will act, but things on a small scale.
              </p>

              <button
                type="button"
                className="
                  relative z-20 flex cursor-pointer items-center justify-center
                  rounded-md bg-[#2DC071]
                  px-8 py-4 text-base font-bold leading-none text-white
                  lg:px-10 lg:text-lg
                "
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
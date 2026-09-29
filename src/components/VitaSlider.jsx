import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import vitaImage from "../assets/vita.png";

export default function VitaSlider() {
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
          relative w-full max-w-360
          [&_.swiper-pagination-bullet]:bg-white!
          [&_.swiper-pagination-bullet]:opacity-40!
          [&_.swiper-pagination-bullet-active]:bg-white!
          [&_.swiper-pagination-bullet-active]:opacity-100!
        "
      >
        <SwiperSlide>
          <div
            className="
              flex w-full flex-col items-center justify-center
              bg-[#23856D] px-10 pt-16
              text-white
              lg:aspect-1440/709
              lg:flex-row
              lg:px-0
              lg:pt-0
            "
          >
            {/* SOL TARAF - YAZILAR */}
            <div
              className="
                flex w-full flex-col items-center text-center
                lg:w-1/2 lg:items-start lg:pl-50 lg:text-left
              "
            >
              <p className="mb-7 text-base font-bold">
                SUMMER 2020
              </p>

              <h2
                className="
                  mb-7 text-[40px] font-bold leading-tight
                  lg:text-[58px]
                "
              >
                Vita Classic Product
              </h2>

              <p className="mb-7 max-w-87.5 text-sm leading-5">
                We know how large objects will act, We know how are objects
                will act, We know
              </p>

              {/* PRICE + BUTTON */}
              <div className="flex flex-col items-center gap-5 sm:flex-row">
                <span className="text-2xl font-bold">
                  $16.48
                </span>

                <button
                  type="button"
                  className="
                    cursor-pointer rounded-md bg-[#2DC071]
                    px-10 py-4 text-sm font-bold text-white
                  "
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* SAĞ TARAF - VITA IMAGE */}
            <div
              className="
                mt-10 flex w-full items-end justify-center
                lg:mt-0 lg:h-full lg:w-1/2
              "
            >
              <img
                src={vitaImage}
                alt="Vita Classic Product"
                className="
                  h-auto w-full max-w-110.75
                  object-contain
                  lg:h-171.25 lg:w-110.75
                "
              />
            </div>
          </div>
        </SwiperSlide>

        {/* 2. SLIDE */}
        <SwiperSlide>
          <div
            className="
              flex w-full flex-col items-center justify-center
              bg-[#23856D] px-10 pt-16
              text-white
              lg:aspect-1440/709
              lg:flex-row
              lg:px-0
              lg:pt-0
            "
          >
            <div
              className="
                flex w-full flex-col items-center text-center
                lg:w-1/2 lg:items-start lg:pl-50 lg:text-left
              "
            >
              <p className="mb-7 text-base font-bold">
                SUMMER 2020
              </p>

              <h2
                className="
                  mb-7 text-[40px] font-bold leading-tight
                  lg:text-[58px]
                "
              >
                Vita Classic Product
              </h2>

              <p className="mb-7 max-w-87.5 text-sm leading-5">
                We know how large objects will act, We know how are objects
                will act, We know
              </p>

              <div className="flex flex-col items-center gap-5 sm:flex-row">
                <span className="text-2xl font-bold">
                  $16.48
                </span>

                <button
                  type="button"
                  className="
                    cursor-pointer rounded-md bg-[#2DC071]
                    px-10 py-4 text-sm font-bold text-white
                  "
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <div
              className="
                mt-10 flex w-full items-end justify-center
                lg:mt-0 lg:h-full lg:w-1/2
              "
            >
              <img
                src={vitaImage}
                alt="Vita Classic Product"
                className="
                  h-auto w-full max-w-110.75
                  object-contain
                  lg:h-171.25 lg:w-110.75
                "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
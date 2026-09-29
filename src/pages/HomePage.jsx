import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import VitaSlider from "../components/VitaSlider";
import menImage from "../assets/men.jpg";
import womenImage from "../assets/women.jpg";
import accessoriesImage from "../assets/accessories.jpg";
import kidsImage from "../assets/kids.jpg";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";

import bestFoto1 from "../assets/best foto 1.jpg";
import bestFoto2 from "../assets/best foto 2.jpg";
import bestFoto3 from "../assets/best foto 3.jpg";
import bestFoto4 from "../assets/best foto 4.jpg";
import bestFoto5 from "../assets/best foto 5.jpg";
import bestFoto6 from "../assets/best foto 6.jpg";
import bestFoto7 from "../assets/best foto 7.jpg";
import bestFoto8 from "../assets/best foto 8.jpg";

const products = [
  { id: 1, image: bestFoto1 },
  { id: 2, image: bestFoto2 },
  { id: 3, image: bestFoto3 },
  { id: 4, image: bestFoto4 },
  { id: 5, image: bestFoto5 },
  { id: 6, image: bestFoto6 },
  { id: 7, image: bestFoto7 },
  { id: 8, image: bestFoto8 },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      {/* HERO / SLIDER */}
      <Slider />

      {/* EDITOR'S PICK */}
      <section className="flex w-full flex-col items-center bg-[#FAFAFA] px-6 py-20">
        {/* Başlık */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-[#252B42]">
            EDITOR'S PICK
          </h2>

          <p className="mt-2 text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Kategoriler */}
        <div className="mt-12 flex w-full max-w-255 flex-col gap-4 lg:flex-row lg:gap-3.75">
          {/* MEN */}
          <div className="relative flex h-125 w-full lg:w-127.5">
            <img
              src={menImage}
              alt="Men"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 flex h-12 w-42.5 items-center justify-center bg-white">
              <span className="text-base font-bold text-[#252B42]">
                MEN
              </span>
            </div>
          </div>

          {/* WOMEN */}
          <div className="relative flex h-125 w-full lg:w-60">
            <img
              src={womenImage}
              alt="Women"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 flex h-12 w-34 items-center justify-center bg-white">
              <span className="text-base font-bold text-[#252B42]">
                WOMEN
              </span>
            </div>
          </div>

          {/* ACCESSORIES + KIDS */}
          <div className="flex w-full flex-col gap-4 lg:w-60">
            {/* ACCESSORIES */}
            <div className="relative flex h-60.5 w-full">
              <img
                src={accessoriesImage}
                alt="Accessories"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 flex h-12 w-42.5 items-center justify-center bg-white">
                <span className="text-sm font-bold text-[#252B42]">
                  ACCESSORIES
                </span>
              </div>
            </div>

            {/* KIDS */}
            <div className="relative flex h-60.5 w-full">
              <img
                src={kidsImage}
                alt="Kids"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 flex h-12 w-30 items-center justify-center bg-white">
                <span className="text-base font-bold text-[#252B42]">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="flex w-full flex-col items-center bg-white px-6 py-20">
        {/* Başlık */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xl text-[#737373]">
            Featured Products
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>

          <p className="mt-2 text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Ürünler */}
       <div className="mt-12 flex w-full max-w-260 flex-wrap justify-center gap-x-5 gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
            />
          ))}
        </div>
      </section>
      <VitaSlider />
      <NeuralUniverse />
      <FeaturedPosts />
    </div>
  );
}
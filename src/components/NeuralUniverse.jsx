import neuralImage from "../assets/neural.png";

export default function NeuralUniverse() {
  return (
    <section className="flex w-full justify-center bg-white">
      <div
        className="
          flex w-full max-w-359.75 flex-col
          lg:h-170.5 lg:flex-row
        "
      >
       {/* SOL TARAF - IMAGE */}
            <div className="flex w-full items-end lg:h-170.5 lg:w-176 lg:shrink-0">
            <img
                src={neuralImage}
                alt="Part of the Neural Universe"
                className="
                h-auto w-full object-cover
                lg:h-170.5 lg:w-176
                "
            />
            </div>
        {/* SAĞ TARAF - CONTENT */}
        <div
          className="
            flex w-full flex-col items-center justify-center
            px-8 py-16 text-center
            lg:h-full lg:w-1/2
            lg:items-start lg:px-20 lg:py-0 lg:text-left
          "
        >
          <p className="mb-7 text-base font-bold text-[#BDBDBD]">
            SUMMER 2020
          </p>

          <h2
            className="
              mb-7 max-w-112.5
              text-[40px] font-bold leading-tight text-[#252B42]
            "
          >
            Part of the Neural Universe
          </h2>

          <p className="mb-7 max-w-95 text-sm leading-5 text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              className="
                cursor-pointer rounded-md bg-[#2DC071]
                px-10 py-4 text-sm font-bold text-white
              "
            >
              BUY NOW
            </button>

            <button
              type="button"
              className="
                cursor-pointer rounded-md border border-[#2DC071]
                px-10 py-4 text-sm font-bold text-[#2DC071]
              "
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
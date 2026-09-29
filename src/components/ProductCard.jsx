export default function ProductCard({ image }) {
  return (
    <div className="flex w-59.75 flex-col">
      {/* PRODUCT IMAGE */}
      <img
        src={image}
        alt="Product"
        className="h-106.75 w-59.25 object-cover"
      />

      {/* PRODUCT INFO */}
      <div className="flex w-full flex-col items-center px-6 py-6 text-center">
        {/* PRODUCT NAME */}
        <h3 className="text-base font-bold text-[#252B42]">
          Graphic Design
        </h3>

        {/* DEPARTMENT */}
        <p className="mt-2 text-sm font-bold text-[#737373]">
          English Department
        </p>

        {/* PRICE + PRODUCT COLORS */}
        <div className="mt-3 flex flex-col items-center gap-4">
          {/* PRICE */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#BDBDBD]">
              $16.48
            </span>

            <span className="text-base font-bold text-[#23856D]">
              $6.48
            </span>
          </div>

          {/* PRODUCT COLORS */}
          <div className="flex h-4 w-[82.23px] items-center justify-between">
            <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>

            <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>

            <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>

            <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
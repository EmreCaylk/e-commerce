import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShopProducts() {
  const productList = useSelector(
    (state) => state.product.productList
  );

  const total = useSelector(
    (state) => state.product.total
  );

  const fetchState = useSelector(
    (state) => state.product.fetchState
  );

  // ================= LOADING =================

  if (fetchState === "FETCHING") {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div
          className="
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-gray-200
            border-t-[#23A6F0]
          "
        />
      </div>
    );
  }

  // ================= ERROR =================

  if (fetchState === "FAILED") {
    return (
      <div className="py-16 text-center">
        <p className="text-[16px] font-bold text-red-500">
          Ürünler yüklenirken bir hata oluştu.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-295 px-6 py-12">

        {/* TOTAL */}

        <div className="mb-8">
          <p className="text-[14px] font-bold text-[#737373]">
            Showing all {total} results
          </p>
        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {productList.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group flex flex-col"
            >
              {/* IMAGE */}

              <div className="h-75 w-full overflow-hidden bg-[#F5F5F5]">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* INFO */}

              <div className="flex flex-col items-center px-4 py-6 text-center">

                <h3 className="text-[16px] font-bold text-[#252B42]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[14px] font-bold text-[#737373]">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[16px] font-bold text-[#23856D]">
                    ${product.price}
                  </span>

                  <span className="text-[13px] font-bold text-[#F3CD03]">
                    ★ {product.rating}
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
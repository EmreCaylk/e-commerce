import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";

import {
  increaseCartItem,
  decreaseCartItem,
  removeFromCart,
  toggleCartItem,
} from "../store/actions/shoppingCartActions.js";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.shoppingCart.cart
  );

  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce(
      (total, item) =>
        total +
        Number(item.product.price) * item.count,
      0
    );

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-300 px-6 py-12">

        {/* ================= TITLE ================= */}

        <h1 className="text-3xl font-bold text-[#252B42]">
          Sepetim ({cart.length} Ürün)
        </h1>


        {/* ================= EMPTY CART ================= */}

        {cart.length === 0 ? (

          <div className="py-20 text-center">

            <p className="text-[18px] font-bold text-[#737373]">
              Sepetiniz boş.
            </p>

          </div>

        ) : (

          <div className="mt-10">

            {/* ================= TABLE HEADER ================= */}

            <div
              className="
                hidden
                border-b
                border-[#E8E8E8]
                pb-4
                md:grid
                md:grid-cols-[40px_100px_1fr_130px_130px_130px]
                md:items-center
                md:gap-5
              "
            >
              <div />

              <div />

              <p className="text-sm font-bold text-[#737373]">
                Ürün
              </p>

              <p className="text-center text-sm font-bold text-[#737373]">
                Fiyat
              </p>

              <p className="text-center text-sm font-bold text-[#737373]">
                Adet
              </p>

              <p className="text-right text-sm font-bold text-[#737373]">
                Toplam
              </p>
            </div>


            {/* ================= PRODUCTS ================= */}

            <div>

              {cart.map((item) => (

                <div
                  key={item.product.id}
                  className="
                    flex
                    flex-col
                    gap-5
                    border-b
                    border-[#E8E8E8]
                    py-6

                    md:grid
                    md:grid-cols-[40px_100px_1fr_130px_130px_130px]
                    md:items-center
                    md:gap-5
                  "
                >

                  {/* ================= CHECKBOX ================= */}

                  <div className="flex items-center">

                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        dispatch(
                          toggleCartItem(item.product.id)
                        )
                      }
                      className="
                        h-5
                        w-5
                        cursor-pointer
                        accent-[#23A6F0]
                      "
                    />

                  </div>


                  {/* ================= IMAGE ================= */}

                  <div
                    className="
                      h-28
                      w-24
                      shrink-0
                      overflow-hidden
                      rounded-md
                      bg-[#F5F5F5]
                    "
                  >

                    {item.product.images?.[0]?.url && (
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    )}

                  </div>


                  {/* ================= PRODUCT INFO ================= */}

                  <div className="min-w-0">

                    <h2
                      className="
                        text-[16px]
                        font-bold
                        text-[#252B42]
                      "
                    >
                      {item.product.name}
                    </h2>

                    <p
                      className="
                        mt-2
                        line-clamp-2
                        text-[14px]
                        text-[#737373]
                      "
                    >
                      {item.product.description}
                    </p>

                  </div>


                  {/* ================= PRICE ================= */}

                  <div className="md:text-center">

                    <p
                      className="
                        text-[16px]
                        font-bold
                        text-[#23856D]
                      "
                    >
                      ${Number(item.product.price).toFixed(2)}
                    </p>

                  </div>


                  {/* ================= QUANTITY ================= */}

                  <div className="flex items-center md:justify-center">

                    {/* MINUS */}

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          decreaseCartItem(item.product.id)
                        )
                      }
                      className="
                        flex
                        h-9
                        w-9
                        cursor-pointer
                        items-center
                        justify-center
                        border
                        border-[#E8E8E8]
                        bg-white
                        text-lg
                        text-[#252B42]
                        hover:bg-[#F5F5F5]
                      "
                    >
                      −
                    </button>


                    {/* COUNT */}

                    <span
                      className="
                        flex
                        h-9
                        w-12
                        items-center
                        justify-center
                        border-y
                        border-[#E8E8E8]
                        text-sm
                        font-bold
                        text-[#252B42]
                      "
                    >
                      {item.count}
                    </span>


                    {/* PLUS */}

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          increaseCartItem(item.product.id)
                        )
                      }
                      className="
                        flex
                        h-9
                        w-9
                        cursor-pointer
                        items-center
                        justify-center
                        border
                        border-[#E8E8E8]
                        bg-white
                        text-lg
                        text-[#252B42]
                        hover:bg-[#F5F5F5]
                      "
                    >
                      +
                    </button>

                  </div>


                  {/* ================= TOTAL + DELETE ================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      md:justify-end
                      md:gap-5
                    "
                  >

                    <p
                      className="
                        text-[16px]
                        font-bold
                        text-[#252B42]
                      "
                    >
                      $
                      {(
                        Number(item.product.price) *
                        item.count
                      ).toFixed(2)}
                    </p>


                    {/* DELETE */}

                    <button
                      type="button"
                      aria-label="Remove product"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.product.id)
                        )
                      }
                      className="
                        cursor-pointer
                        text-[#737373]
                        transition
                        hover:text-red-500
                      "
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* ================= TOTAL ================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-end
                border-t
                border-[#E8E8E8]
                pt-6
              "
            >

              <p className="text-sm font-bold text-[#737373]">
                Toplam Ödeme
              </p>

              <p
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-[#252B42]
                "
              >
                ${totalPrice.toFixed(2)}
              </p>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}
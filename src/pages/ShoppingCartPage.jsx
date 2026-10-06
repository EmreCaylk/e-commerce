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

  // ================= PRODUCT TOTAL =================

  const productTotal = cart
    .filter((item) => item.checked)
    .reduce(
      (total, item) =>
        total +
        Number(item.product.price) * item.count,
      0
    );

  // ================= SHIPPING =================

  const shippingTotal = cart.length > 0 ? 29.99 : 0;

  // ================= DISCOUNT =================

  const discount = cart.length > 0 ? 29.99 : 0;

  // ================= GENERAL TOTAL =================

  const grandTotal =
    productTotal + shippingTotal - discount;


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

          <div
            className="
              mt-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-start
            "
          >

            {/* ================================================= */}
            {/* ================= CART LIST ===================== */}
            {/* ================================================= */}

            <div className="min-w-0 flex-1">

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
                        $
                        {Number(
                          item.product.price
                        ).toFixed(2)}
                      </p>

                    </div>


                    {/* ================= QUANTITY ================= */}

                    <div
                      className="
                        flex
                        items-center
                        md:justify-center
                      "
                    >

                      {/* MINUS */}

                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            decreaseCartItem(
                              item.product.id
                            )
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
                            increaseCartItem(
                              item.product.id
                            )
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
                          Number(
                            item.product.price
                          ) * item.count
                        ).toFixed(2)}
                      </p>


                      {/* DELETE */}

                      <button
                        type="button"
                        aria-label="Remove product"
                        onClick={() =>
                          dispatch(
                            removeFromCart(
                              item.product.id
                            )
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

            </div>


            {/* ================================================= */}
            {/* ================= ORDER SUMMARY ================= */}
            {/* ================================================= */}

            <aside
              className="
                w-full
                shrink-0
                lg:w-80
              "
            >

              <div
                className="
                  rounded-md
                  border
                  border-[#E8E8E8]
                  bg-white
                  p-6
                "
              >

                {/* TITLE */}

                <h2
                  className="
                    text-2xl
                    font-normal
                    text-[#252B42]
                  "
                >
                  Sipariş Özeti
                </h2>


                {/* PRODUCT TOTAL */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-sm text-[#737373]">
                    Ürün Toplamı
                  </span>

                  <span
                    className="
                      text-sm
                      font-bold
                      text-[#252B42]
                    "
                  >
                    ${productTotal.toFixed(2)}
                  </span>

                </div>


                {/* SHIPPING */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-sm text-[#737373]">
                    Kargo Toplamı
                  </span>

                  <span
                    className="
                      text-sm
                      font-bold
                      text-[#252B42]
                    "
                  >
                    ${shippingTotal.toFixed(2)}
                  </span>

                </div>


                {/* DISCOUNT */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-sm text-[#737373]">
                    İndirim
                  </span>

                  <span
                    className="
                      text-sm
                      font-bold
                      text-[#E77C40]
                    "
                  >
                    -${discount.toFixed(2)}
                  </span>

                </div>


                {/* DIVIDER */}

                <div
                  className="
                    my-5
                    border-t
                    border-[#E8E8E8]
                  "
                />


                {/* GRAND TOTAL */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[16px]
                      font-bold
                      text-[#252B42]
                    "
                  >
                    Toplam
                  </span>

                  <span
                    className="
                      text-xl
                      font-bold
                      text-[#E77C40]
                    "
                  >
                    ${grandTotal.toFixed(2)}
                  </span>

                </div>


                {/* ORDER BUTTON */}

                <button
                  type="button"
                  className="
                    mt-8
                    flex
                    h-14
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-md
                    bg-[#E77C40]
                    text-[16px]
                    font-bold
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Sipariş Oluştur
                  <span className="ml-2 text-xl">
                    ›
                  </span>
                </button>

              </div>

            </aside>

          </div>

        )}

      </div>
    </section>
  );
}
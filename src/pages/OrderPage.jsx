import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-toastify";

import { fetchOrders } from "../store/actions/clientActions.js";

export default function OrderPage() {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openOrder, setOpenOrder] = useState(null);

  // =====================================================
  // GET ORDERS
  // =====================================================

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await dispatch(
          fetchOrders()
        );

        console.log("ORDERS:", data);

        setOrders(
          Array.isArray(data)
            ? data
            : []
        );
      } catch (error) {
        console.error(
          "Siparişler alınamadı:",
          error
        );

        toast.error(
          "Siparişleriniz alınamadı."
        );
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [dispatch]);

  // =====================================================
  // TOGGLE ORDER DETAIL
  // =====================================================

  const toggleOrder = (orderId) => {
    setOpenOrder(
      openOrder === orderId
        ? null
        : orderId
    );
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <section className="w-full bg-white">
        <div className="
          mx-auto
          max-w-300
          px-5
          py-16
        ">
          <div className="flex justify-center">
            <p className="
              text-[16px]
              font-semibold
              text-[#737373]
            ">
              Siparişleriniz yükleniyor...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <section className="w-full bg-white">

      <div className="
        mx-auto
        max-w-300
        px-5
        py-12
      ">

        {/* ================= TITLE ================= */}

        <div className="mb-8">

          <h1 className="
            text-[32px]
            font-bold
            text-[#252B42]
          ">
            Siparişlerim
          </h1>

          <p className="
            mt-2
            text-[14px]
            text-[#737373]
          ">
            Geçmiş siparişlerinizi
            buradan görüntüleyebilirsiniz.
          </p>

        </div>


        {/* ================= EMPTY ================= */}

        {orders.length === 0 ? (

          <div className="
            rounded-lg
            border
            border-[#DDDDDD]
            px-5
            py-12
            text-center
          ">

            <p className="
              text-[16px]
              font-semibold
              text-[#737373]
            ">
              Henüz siparişiniz bulunmuyor.
            </p>

          </div>

        ) : (

          /* ================= ORDERS TABLE ================= */

          <div className="
            overflow-hidden
            rounded-lg
            border
            border-[#DDDDDD]
          ">

            {/* ================= TABLE HEADER ================= */}

            <div className="
              hidden
              grid-cols-4
              bg-[#F7F7F7]
              px-6
              py-4
              md:grid
            ">

              <div className="
                text-[14px]
                font-bold
                text-[#252B42]
              ">
                Sipariş No
              </div>

              <div className="
                text-[14px]
                font-bold
                text-[#252B42]
              ">
                Sipariş Tarihi
              </div>

              <div className="
                text-[14px]
                font-bold
                text-[#252B42]
              ">
                Toplam
              </div>

              <div className="
                text-[14px]
                font-bold
                text-[#252B42]
              ">
                Detay
              </div>

            </div>


            {/* ================= ORDERS ================= */}

            {orders.map((order) => {

              const isOpen =
                openOrder === order.id;

              const orderDate =
                new Date(
                  order.order_date
                ).toLocaleDateString(
                  "tr-TR",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }
                );

              return (
                <div
                  key={order.id}
                  className="
                    border-t
                    border-[#DDDDDD]
                  "
                >

                  {/* ================= ORDER ROW ================= */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleOrder(order.id)
                    }
                    className="
                      grid
                      w-full
                      cursor-pointer
                      grid-cols-1
                      gap-3
                      px-6
                      py-5
                      text-left
                      transition
                      hover:bg-[#FAFAFA]
                      md:grid-cols-4
                      md:items-center
                    "
                  >

                    {/* ORDER NUMBER */}

                    <div>

                      <span className="
                        text-[12px]
                        text-[#737373]
                        md:hidden
                      ">
                        Sipariş No
                      </span>

                      <p className="
                        text-[15px]
                        font-bold
                        text-[#252B42]
                      ">
                        #{order.id}
                      </p>

                    </div>


                    {/* DATE */}

                    <div>

                      <span className="
                        text-[12px]
                        text-[#737373]
                        md:hidden
                      ">
                        Sipariş Tarihi
                      </span>

                      <p className="
                        text-[14px]
                        text-[#737373]
                      ">
                        {orderDate}
                      </p>

                    </div>


                    {/* PRICE */}

                    <div>

                      <span className="
                        text-[12px]
                        text-[#737373]
                        md:hidden
                      ">
                        Toplam
                      </span>

                      <p className="
                        text-[16px]
                        font-bold
                        text-[#E77C40]
                      ">
                        {Number(
                          order.price || 0
                        ).toFixed(2)}{" "}
                        TL
                      </p>

                    </div>


                    {/* DETAIL BUTTON */}

                    <div className="
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      font-bold
                      text-[#252B42]
                    ">

                      <span>
                        {isOpen
                          ? "Detayı Gizle"
                          : "Detayları Gör"}
                      </span>

                      {isOpen ? (
                        <ChevronUp
                          size={18}
                        />
                      ) : (
                        <ChevronDown
                          size={18}
                        />
                      )}

                    </div>

                  </button>


                  {/* ================= ORDER DETAIL ================= */}

                  {isOpen && (

                    <div className="
                      border-t
                      border-[#EEEEEE]
                      bg-[#FAFAFA]
                      px-6
                      py-6
                    ">

                      {/* ORDER INFORMATION */}

                      <div className="
                        mb-6
                        grid
                        grid-cols-1
                        gap-4
                        md:grid-cols-3
                      ">

                        <div>
                          <p className="
                            text-[12px]
                            text-[#737373]
                          ">
                            Sipariş Numarası
                          </p>

                          <p className="
                            mt-1
                            font-bold
                            text-[#252B42]
                          ">
                            #{order.id}
                          </p>
                        </div>


                        <div>
                          <p className="
                            text-[12px]
                            text-[#737373]
                          ">
                            Adres ID
                          </p>

                          <p className="
                            mt-1
                            font-bold
                            text-[#252B42]
                          ">
                            {order.address_id}
                          </p>
                        </div>


                        <div>
                          <p className="
                            text-[12px]
                            text-[#737373]
                          ">
                            Ödeme
                          </p>

                          <p className="
                            mt-1
                            font-bold
                            text-[#252B42]
                          ">
                            ****{" "}
                            {String(
                              order.card_no
                            ).slice(-4)}
                          </p>
                        </div>

                      </div>


                      {/* PRODUCTS TITLE */}

                      <h2 className="
                        mb-4
                        text-[18px]
                        font-bold
                        text-[#252B42]
                      ">
                        Sipariş Detayları
                      </h2>


                      {/* PRODUCTS */}

                      <div className="
                        flex
                        flex-col
                        gap-4
                      ">

                        {order.products?.map(
                          (product) => (

                            <div
                              key={
                                product.id
                              }
                              className="
                                flex
                                flex-col
                                gap-4
                                rounded-lg
                                border
                                border-[#DDDDDD]
                                bg-white
                                p-4
                                sm:flex-row
                              "
                            >

                              {/* IMAGE */}

                              <div className="
                                h-24
                                w-20
                                shrink-0
                                overflow-hidden
                                rounded-md
                                bg-[#F5F5F5]
                              ">

                                <img
                                  src={
                                    product
                                      .images?.[0]
                                      ?.url
                                  }
                                  alt={
                                    product.name
                                  }
                                  className="
                                    h-full
                                    w-full
                                    object-cover
                                  "
                                />

                              </div>


                              {/* PRODUCT INFO */}

                              <div className="
                                flex
                                min-w-0
                                flex-1
                                flex-col
                                justify-center
                              ">

                                <h3 className="
                                  text-[15px]
                                  font-bold
                                  text-[#252B42]
                                ">
                                  {product.name}
                                </h3>

                                <p className="
                                  mt-1
                                  line-clamp-2
                                  text-[13px]
                                  text-[#737373]
                                ">
                                  {
                                    product.description
                                  }
                                </p>

                                <div className="
                                  mt-3
                                  flex
                                  flex-wrap
                                  gap-5
                                ">

                                  <span className="
                                    text-[13px]
                                    text-[#737373]
                                  ">
                                    Adet:{" "}
                                    <strong className="
                                      text-[#252B42]
                                    ">
                                      {
                                        product.count
                                      }
                                    </strong>
                                  </span>

                                  <span className="
                                    text-[13px]
                                    text-[#737373]
                                  ">
                                    Fiyat:{" "}
                                    <strong className="
                                      text-[#E77C40]
                                    ">
                                      {Number(
                                        product.price ||
                                          0
                                      ).toFixed(2)}{" "}
                                      TL
                                    </strong>
                                  </span>

                                </div>

                              </div>

                            </div>

                          )
                        )}

                      </div>


                      {/* TOTAL */}

                      <div className="
                        mt-6
                        flex
                        justify-end
                        border-t
                        border-[#DDDDDD]
                        pt-5
                      ">

                        <div className="
                          flex
                          items-center
                          gap-5
                        ">

                          <span className="
                            text-[16px]
                            font-bold
                            text-[#252B42]
                          ">
                            Sipariş Toplamı:
                          </span>

                          <span className="
                            text-[20px]
                            font-bold
                            text-[#E77C40]
                          ">
                            {Number(
                              order.price || 0
                            ).toFixed(2)}{" "}
                            TL
                          </span>

                        </div>

                      </div>

                    </div>

                  )}

                </div>
              );
            })}

          </div>

        )}

      </div>

    </section>
  );
}
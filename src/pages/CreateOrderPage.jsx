import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  fetchAddresses,
  addAddress,
  fetchCreditCards,
  addCreditCard,
  createOrder,
} from "../store/actions/clientActions";

// =====================================================
// CREATE ORDER PAGE
// =====================================================

export default function CreateOrderPage() {
  const dispatch = useDispatch();

  // =====================================================
  // REDUX
  // =====================================================

  const addressList = useSelector(
    (state) => state.client.addressList || []
  );

  const creditCards = useSelector(
    (state) => state.client.creditCards || []
  );

  const cart = useSelector(
    (state) => state.shoppingCart?.cart || []
  );

  // =====================================================
  // STEP
  // =====================================================

  const [currentStep, setCurrentStep] = useState(1);

  // =====================================================
  // ORDER COMPLETED
  // =====================================================

  const [orderCompleted, setOrderCompleted] =
    useState(false);

  // =====================================================
  // ADDRESS
  // =====================================================

  const [
    selectedShippingAddress,
    setSelectedShippingAddress,
  ] = useState(null);

  const [
    showAddressForm,
    setShowAddressForm,
  ] = useState(false);

  const [
    sameBillingAddress,
    setSameBillingAddress,
  ] = useState(true);

  const [addressForm, setAddressForm] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });

  // =====================================================
  // PAYMENT
  // =====================================================

  const [selectedCard, setSelectedCard] =
    useState(null);

  const [showNewCardForm, setShowNewCardForm] =
    useState(false);

  const [use3DSecure, setUse3DSecure] =
    useState(false);

  const [agreement, setAgreement] =
    useState(false);

  const [cardCcv, setCardCcv] =
    useState("");

  // =====================================================
  // NEW CARD
  // =====================================================

  const [cardForm, setCardForm] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  // =====================================================
  // GET ADDRESS + CARDS
  // =====================================================

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCreditCards());
  }, [dispatch]);

  // =====================================================
  // DEFAULT ADDRESS
  // =====================================================

  useEffect(() => {
    if (
      addressList.length > 0 &&
      selectedShippingAddress === null
    ) {
      setSelectedShippingAddress(
        addressList[0]
      );
    }
  }, [
    addressList,
    selectedShippingAddress,
  ]);

  // =====================================================
  // DEFAULT CARD
  // =====================================================

  useEffect(() => {
    if (
      creditCards.length > 0 &&
      selectedCard === null &&
      !showNewCardForm
    ) {
      setSelectedCard(
        creditCards[0]
      );
    }
  }, [
    creditCards,
    selectedCard,
    showNewCardForm,
  ]);

  // =====================================================
  // ADDRESS CHANGE
  // =====================================================

  const handleAddressChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setAddressForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // ADD ADDRESS
  // =====================================================

  const handleAddAddress = async (event) => {
    event.preventDefault();

    if (
      !addressForm.title ||
      !addressForm.name ||
      !addressForm.surname ||
      !addressForm.phone ||
      !addressForm.city ||
      !addressForm.district ||
      !addressForm.neighborhood
    ) {
      toast.error(
        "Lütfen tüm adres bilgilerini doldurun."
      );

      return;
    }

    try {
      await dispatch(
        addAddress(addressForm)
      );

      toast.success(
        "Adres başarıyla kaydedildi."
      );

      setAddressForm({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });

      setShowAddressForm(false);
    } catch (error) {
      console.error(
        "ADRES HATASI:",
        error.response?.data ||
          error.message
      );

      toast.error(
        error.response?.data?.message ||
          "Adres kaydedilemedi."
      );
    }
  };

  // =====================================================
  // CARD CHANGE
  // =====================================================

  const handleCardChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setCardForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // ADD CARD
  // =====================================================

  const handleAddCard = async (event) => {
    event.preventDefault();

    if (
      !cardForm.card_no ||
      !cardForm.expire_month ||
      !cardForm.expire_year ||
      !cardForm.name_on_card
    ) {
      toast.error(
        "Lütfen tüm kart bilgilerini doldurun."
      );

      return;
    }

    try {
      await dispatch(
        addCreditCard({
          card_no:
            cardForm.card_no,

          expire_month:
            Number(
              cardForm.expire_month
            ),

          expire_year:
            Number(
              cardForm.expire_year
            ),

          name_on_card:
            cardForm.name_on_card,
        })
      );

      toast.success(
        "Kart başarıyla kaydedildi."
      );

      setCardForm({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
      });

      setShowNewCardForm(false);
    } catch (error) {
      console.error(
        "KART HATASI:",
        error.response?.data ||
          error.message
      );

      toast.error(
        error.response?.data?.message ||
          "Kart kaydedilemedi."
      );
    }
  };

  // =====================================================
  // CONTINUE PAYMENT
  // =====================================================

  const handleContinueToPayment = () => {
    if (!selectedShippingAddress) {
      toast.error(
        "Lütfen bir teslimat adresi seçin."
      );

      return;
    }

    setCurrentStep(2);
  };

  // =====================================================
  // PRODUCT DETAIL
  // =====================================================

  const getProductDetail = (item) => {
    const product =
      item.product || {};

    const color =
      item.color ||
      item.selectedColor ||
      product.color ||
      product.selectedColor ||
      "";

    const size =
      item.size ||
      item.selectedSize ||
      product.size ||
      product.selectedSize ||
      "";

    if (color && size) {
      return `${color} - ${size}`;
    }

    if (color) {
      return String(color);
    }

    if (size) {
      return String(size);
    }

    return "";
  };

  // =====================================================
  // HANDLE PAYMENT
  // =====================================================

  const handlePayment = async () => {
    if (!selectedShippingAddress) {
      toast.error(
        "Lütfen teslimat adresi seçin."
      );

      return;
    }

    if (!selectedCard) {
      toast.error(
        "Lütfen bir kart seçin."
      );

      return;
    }

    if (!cardCcv) {
      toast.error(
        "Lütfen CVV bilgilerini girin."
      );

      return;
    }

    if (!agreement) {
      toast.error(
        "Lütfen sözleşmeyi onaylayın."
      );

      return;
    }

    const selectedProducts =
      cart.filter(
        (item) =>
          item.checked !== false
      );

    if (
      selectedProducts.length === 0
    ) {
      toast.error(
        "Sepetinizde ürün bulunmuyor."
      );

      return;
    }

    // =================================================
    // PRODUCTS
    // =================================================

    const products =
      selectedProducts.map(
        (item) => ({
          product_id:
            item.product.id,

          count:
            item.count,

          detail:
            getProductDetail(item),
        })
      );

    // =================================================
    // PRICE
    // =================================================

    const price =
      selectedProducts.reduce(
        (total, item) => {
          const product =
            item.product || {};

          const productPrice =
            Number(
              product.price ||
                product.sell_price ||
                product.discounted_price ||
                0
            );

          return (
            total +
            productPrice *
              Number(
                item.count || 1
              )
          );
        },
        0
      );

    // =================================================
    // ORDER DATA
    // =================================================

    const orderData = {
      address_id:
        selectedShippingAddress.id,

      order_date:
        new Date().toISOString(),

      card_no:
        Number(
          selectedCard.card_no
        ),

      card_name:
        selectedCard.name_on_card,

      card_expire_month:
        Number(
          selectedCard.expire_month
        ),

      card_expire_year:
        Number(
          selectedCard.expire_year
        ),

      card_ccv:
        Number(cardCcv),

      price:
        price,

      products:
        products,
    };

    console.log(
      "ORDER DATA:",
      orderData
    );

    // =================================================
    // CREATE ORDER
    // =================================================

    try {
      console.log(
        "ORDER POST GÖNDERİLİYOR..."
      );

      const result =
        await dispatch(
          createOrder(orderData)
        );

      console.log(
        "ORDER BAŞARILI:",
        result
      );

      // =================================================
      // CLEAR CART
      // =================================================

      dispatch({
        type: "SET_CART",
        payload: [],
      });

      // =================================================
      // SUCCESS
      // =================================================

      toast.success(
        "🎉 Siparişiniz başarıyla oluşturuldu!"
      );

      // =================================================
      // SUCCESS SCREEN
      // =================================================

      setOrderCompleted(true);

    } catch (error) {
      console.error(
        "SİPARİŞ OLUŞTURMA HATASI:",
        error.response?.data ||
          error.message
      );

      toast.error(
        error.response?.data?.message ||
          "Sipariş oluşturulamadı."
      );
    }
  };

  // =====================================================
  // MASK CARD
  // =====================================================

  const maskCardNumber = (
    cardNo
  ) => {
    if (!cardNo) {
      return "**** **** **** ****";
    }

    const value =
      String(cardNo);

    return `**** **** **** ${value.slice(
      -4
    )}`;
  };

  // =====================================================
  // MONTHS
  // =====================================================

  const months =
    Array.from(
      {
        length: 12,
      },
      (_, index) =>
        index + 1
    );

  // =====================================================
  // YEARS
  // =====================================================

  const currentYear =
    new Date().getFullYear();

  const years =
    Array.from(
      {
        length: 12,
      },
      (_, index) =>
        currentYear + index
    );

  // =====================================================
  // CART TOTAL
  // =====================================================

  const cartTotal =
    cart
      .filter(
        (item) =>
          item.checked !== false
      )
      .reduce(
        (total, item) =>
          total +
          Number(
            item.product?.price ||
              0
          ) *
            Number(
              item.count || 1
            ),
        0
      );

  // =====================================================
  // ORDER COMPLETED SCREEN
  // =====================================================

  if (orderCompleted) {
    return (
      <section className="
        flex
        min-h-[600px]
        w-full
        items-center
        justify-center
        bg-white
        px-5
      ">

        <div className="
          w-full
          max-w-[650px]
          rounded-md
          border
          border-[#E6E6E6]
          px-8
          py-14
          text-center
        ">

          <div className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#F97316]
            text-4xl
            text-white
          ">
            ✓
          </div>

          <h1 className="
            mt-7
            text-[30px]
            font-bold
            text-[#252B42]
          ">
            Siparişiniz Başarıyla
            Oluşturuldu!
          </h1>

          <p className="
            mx-auto
            mt-4
            max-w-[500px]
            text-[16px]
            leading-7
            text-[#737373]
          ">
            Siparişiniz başarıyla
            alınmıştır. Bizi tercih
            ettiğiniz için teşekkür
            ederiz.
          </p>

        </div>

      </section>
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="
      w-full
      bg-white
    ">

      <div className="
        mx-auto
        w-full
        max-w-[1280px]
        px-5
        py-8
      ">

        {/* ================================================= */}
        {/* STEP HEADER */}
        {/* ================================================= */}

        <div className="
          grid
          grid-cols-1
          overflow-hidden
          rounded-md
          border
          border-[#E6E6E6]
          md:grid-cols-2
        ">

          {/* STEP 1 */}

          <button
            type="button"
            onClick={() =>
              setCurrentStep(1)
            }
            className={`
              min-h-[120px]
              border-b-4
              px-7
              py-6
              text-left
              ${
                currentStep === 1
                  ? "border-[#F97316]"
                  : "border-[#E6E6E6]"
              }
            `}
          >

            <div className="
              flex
              gap-4
            ">

              <span className="
                text-[28px]
                font-bold
                text-[#F97316]
              ">
                1
              </span>

              <div>

                <h2 className="
                  text-[22px]
                  font-bold
                  text-[#F97316]
                ">
                  Adres Bilgileri
                </h2>

                <p className="
                  mt-1
                  text-[13px]
                  text-[#737373]
                ">
                  {
                    selectedShippingAddress?.title ||
                    "Adres seçiniz"
                  }
                </p>

                {selectedShippingAddress && (
                  <p className="
                    mt-1
                    text-[12px]
                    text-[#737373]
                  ">
                    {
                      selectedShippingAddress.city
                    }{" "}
                    /{" "}
                    {
                      selectedShippingAddress.district
                    }
                  </p>
                )}

              </div>

            </div>

          </button>


          {/* STEP 2 */}

          <button
            type="button"
            onClick={() => {
              if (
                selectedShippingAddress
              ) {
                setCurrentStep(2);
              }
            }}
            className={`
              min-h-[120px]
              border-b-4
              px-7
              py-6
              text-left
              ${
                currentStep === 2
                  ? "border-[#F97316]"
                  : "border-[#E6E6E6]"
              }
            `}
          >

            <div className="
              flex
              gap-4
            ">

              <span className="
                text-[28px]
                font-bold
                text-[#F97316]
              ">
                2
              </span>

              <div>

                <h2 className={`
                  text-[22px]
                  font-bold
                  ${
                    currentStep === 2
                      ? "text-[#F97316]"
                      : "text-[#737373]"
                  }
                `}>
                  Ödeme Seçenekleri
                </h2>

                <p className="
                  mt-1
                  text-[13px]
                  text-[#737373]
                ">
                  Banka/Kredi Kartı veya
                  Alışveriş Kredisi ile
                  ödemenizi güvenle
                  yapabilirsiniz.
                </p>

              </div>

            </div>

          </button>

        </div>


        {/* ================================================= */}
        {/* STEP 1 - ADDRESS */}
        {/* ================================================= */}

        {currentStep === 1 && (

          <div className="mt-5">

            {/* INFO */}

            <div className="
              mb-5
              flex
              items-start
              gap-3
              rounded-md
              border
              border-[#E6E6E6]
              px-5
              py-5
            ">

              <span className="
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F97316]
                text-[12px]
                font-bold
                text-white
              ">
                i
              </span>

              <p className="
                text-[13px]
                leading-5
                text-[#252B42]
              ">
                Kurumsal faturalı alışveriş
                yapmak için "Faturamı Aynı
                Adrese Gönder" tikini
                kaldırın ve Fatura adresi
                olarak kayıtlı Kurumsal
                Fatura adresinizi seçin.
              </p>

            </div>


            {/* ADDRESS */}

            <div className="
              rounded-md
              border
              border-[#E6E6E6]
              p-5
            ">

              <div className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
              ">

                <h2 className="
                  text-[20px]
                  font-bold
                  text-[#252B42]
                ">
                  Teslimat Adresi
                </h2>

                <label className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-[13px]
                  text-[#737373]
                ">

                  <input
                    type="checkbox"
                    checked={
                      sameBillingAddress
                    }
                    onChange={(event) =>
                      setSameBillingAddress(
                        event.target.checked
                      )
                    }
                    className="
                      h-5
                      w-5
                      accent-[#F97316]
                    "
                  />

                  Faturamı Aynı Adrese
                  Gönder

                </label>

              </div>


              {/* NEW ADDRESS FORM */}

              {showAddressForm && (

                <form
                  onSubmit={
                    handleAddAddress
                  }
                  className="
                    mt-6
                    rounded-md
                    border
                    border-[#E6E6E6]
                    bg-[#FAFAFA]
                    p-5
                  "
                >

                  <div className="
                    grid
                    grid-cols-1
                    gap-4
                    md:grid-cols-2
                  ">

                    <input
                      type="text"
                      name="title"
                      value={
                        addressForm.title
                      }
                      onChange={
                        handleAddressChange
                      }
                      placeholder="Adres Başlığı"
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    />

                    <input
                      type="text"
                      name="name"
                      value={
                        addressForm.name
                      }
                      onChange={
                        handleAddressChange
                      }
                      placeholder="Ad"
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    />

                    <input
                      type="text"
                      name="surname"
                      value={
                        addressForm.surname
                      }
                      onChange={
                        handleAddressChange
                      }
                      placeholder="Soyad"
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    />

                    <input
                      type="text"
                      name="phone"
                      value={
                        addressForm.phone
                      }
                      onChange={
                        handleAddressChange
                      }
                      placeholder="Telefon"
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    />

                    <select
                      name="city"
                      value={
                        addressForm.city
                      }
                      onChange={
                        handleAddressChange
                      }
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    >

                      <option value="">
                        İl seçiniz
                      </option>

                      <option value="istanbul">
                        İstanbul
                      </option>

                      <option value="ankara">
                        Ankara
                      </option>

                      <option value="izmir">
                        İzmir
                      </option>

                      <option value="antalya">
                        Antalya
                      </option>

                    </select>

                    <input
                      type="text"
                      name="district"
                      value={
                        addressForm.district
                      }
                      onChange={
                        handleAddressChange
                      }
                      placeholder="İlçe"
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-4
                      "
                    />

                  </div>

                  <textarea
                    name="neighborhood"
                    value={
                      addressForm.neighborhood
                    }
                    onChange={
                      handleAddressChange
                    }
                    rows={4}
                    placeholder="Mahalle, sokak, bina ve kapı numarası"
                    className="
                      mt-4
                      w-full
                      resize-none
                      rounded-md
                      border
                      border-[#E6E6E6]
                      px-4
                      py-3
                    "
                  />

                  <div className="
                    mt-4
                    flex
                    gap-3
                  ">

                    <button
                      type="submit"
                      className="
                        h-12
                        rounded-md
                        bg-[#F97316]
                        px-6
                        font-bold
                        text-white
                      "
                    >
                      Adresi Kaydet
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setShowAddressForm(
                          false
                        )
                      }
                      className="
                        h-12
                        rounded-md
                        border
                        border-[#E6E6E6]
                        px-6
                        font-bold
                      "
                    >
                      Vazgeç
                    </button>

                  </div>

                </form>

              )}


              {/* ADDRESS LIST */}

              <div className="
                mt-6
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
              ">

                {/* NEW ADDRESS */}

                <button
                  type="button"
                  onClick={() =>
                    setShowAddressForm(
                      true
                    )
                  }
                  className="
                    flex
                    min-h-[145px]
                    flex-col
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#E6E6E6]
                    hover:border-[#F97316]
                  "
                >

                  <span className="
                    text-[32px]
                    text-[#F97316]
                  ">
                    +
                  </span>

                  <span className="
                    mt-2
                    text-[14px]
                  ">
                    Yeni Adres Ekle
                  </span>

                </button>


                {addressList.map(
                  (address) => {

                    const selected =
                      selectedShippingAddress?.id ===
                      address.id;

                    return (

                      <div
                        key={address.id}
                        className="w-full"
                      >

                        <label className="
                          flex
                          cursor-pointer
                          items-center
                          gap-2
                        ">

                          <input
                            type="radio"
                            name="shippingAddress"
                            checked={
                              selected
                            }
                            onChange={() =>
                              setSelectedShippingAddress(
                                address
                              )
                            }
                            className="
                              h-5
                              w-5
                              accent-[#F97316]
                            "
                          />

                          <span className="
                            text-[14px]
                            font-medium
                          ">
                            {
                              address.title
                            }
                          </span>

                        </label>


                        <div className={`
                          mt-3
                          min-h-[145px]
                          rounded-md
                          border
                          p-5
                          ${
                            selected
                              ? "border-2 border-[#F97316] bg-[#FFF8F2]"
                              : "border-[#E6E6E6]"
                          }
                        `}>

                          <div className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          ">

                            <span className="
                              text-[13px]
                              font-bold
                            ">
                              👤{" "}
                              {
                                address.name
                              }{" "}
                              {
                                address.surname
                              }
                            </span>

                            <span className="
                              text-[12px]
                            ">
                              📱{" "}
                              {
                                address.phone
                              }
                            </span>

                          </div>

                          <div className="
                            mt-4
                            bg-[#F7F7F7]
                            px-4
                            py-3
                          ">

                            <p className="
                              text-[13px]
                              leading-5
                              text-[#737373]
                            ">
                              {
                                address.neighborhood
                              }
                            </p>

                            <p className="
                              text-[13px]
                              leading-5
                              text-[#737373]
                            ">
                              {
                                address.city
                              }{" "}
                              /{" "}
                              {
                                address.district
                              }
                            </p>

                          </div>

                        </div>

                      </div>

                    );
                  }
                )}

              </div>


              {/* CONTINUE */}

              <button
                type="button"
                onClick={
                  handleContinueToPayment
                }
                className="
                  mt-7
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  bg-[#F97316]
                  text-[16px]
                  font-bold
                  text-white
                "
              >
                Kaydet ve Devam Et
              </button>

            </div>

          </div>

        )}


        {/* ================================================= */}
        {/* STEP 2 - PAYMENT */}
        {/* ================================================= */}

        {currentStep === 2 && (

          <div className="
            mt-5
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1fr_330px]
          ">

            {/* PAYMENT LEFT */}

            <div className="
              overflow-hidden
              rounded-md
              border
              border-[#E6E6E6]
            ">

              {/* HEADER */}

              <div className="
                border-b
                border-[#E6E6E6]
                px-7
                py-5
              ">

                <div className="
                  flex
                  items-center
                  gap-4
                ">

                  <span className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#F97316]
                  ">

                    <span className="
                      h-4
                      w-4
                      rounded-full
                      bg-[#F97316]
                    " />

                  </span>

                  <div>

                    <h2 className="
                      text-[23px]
                      font-bold
                    ">
                      Kart ile Öde
                    </h2>

                    <p className="
                      mt-1
                      text-[14px]
                    ">
                      Kart ile ödemeyi
                      seçtiniz. Banka veya
                      Kredi Kartı kullanarak
                      ödemenizi güvenle
                      yapabilirsiniz.
                    </p>

                  </div>

                </div>

              </div>


              <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
              ">

                {/* CARD */}

                <div className="
                  border-b
                  border-[#E6E6E6]
                  p-7
                  lg:border-b-0
                  lg:border-r
                ">

                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <h3 className="
                      text-[22px]
                      font-bold
                    ">
                      Kart Bilgileri
                    </h3>

                    {creditCards.length >
                      0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setShowNewCardForm(
                            true
                          );
                          setSelectedCard(
                            null
                          );
                        }}
                        className="
                          text-[13px]
                          underline
                        "
                      >
                        Başka bir Kart ile
                        Ödeme Yap
                      </button>
                    )}

                  </div>


                  {/* SAVED CARDS */}

                  {!showNewCardForm && (

                    <div className="
                      mt-7
                      space-y-5
                    ">

                      {creditCards.map(
                        (card) => {

                          const selected =
                            selectedCard?.id ===
                            card.id;

                          return (

                            <div
                              key={card.id}
                            >

                              <label className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3
                              ">

                                <input
                                  type="radio"
                                  name="savedCard"
                                  checked={
                                    selected
                                  }
                                  onChange={() =>
                                    setSelectedCard(
                                      card
                                    )
                                  }
                                  className="
                                    h-5
                                    w-5
                                    accent-[#F97316]
                                  "
                                />

                                <span className="
                                  font-bold
                                ">
                                  {
                                    card.name_on_card
                                  }
                                </span>

                              </label>


                              <div className={`
                                mt-3
                                min-h-[145px]
                                rounded-md
                                border
                                p-5
                                ${
                                  selected
                                    ? "border-2 border-[#F97316]"
                                    : "border-[#E6E6E6]"
                                }
                              `}>

                                <div className="
                                  flex
                                  justify-between
                                ">

                                  <div>

                                    <p className="
                                      font-bold
                                    ">
                                      {
                                        card.name_on_card
                                      }
                                    </p>

                                    <p className="
                                      mt-8
                                      font-bold
                                      tracking-wide
                                    ">
                                      {maskCardNumber(
                                        card.card_no
                                      )}
                                    </p>

                                  </div>

                                  <div className="
                                    flex
                                    items-center
                                  ">

                                    <span className="
                                      h-7
                                      w-7
                                      rounded-full
                                      bg-red-500"
                                    />

                                    <span className="
                                      -ml-3
                                      h-7
                                      w-7
                                      rounded-full
                                      bg-yellow-400"
                                    />

                                  </div>

                                </div>

                                <p className="
                                  mt-4
                                  text-right
                                  text-[13px]
                                ">
                                  {
                                    card.expire_month
                                  }
                                  /
                                  {
                                    card.expire_year
                                  }
                                </p>

                              </div>

                            </div>

                          );
                        }
                      )}


                      <button
                        type="button"
                        onClick={() => {
                          setShowNewCardForm(
                            true
                          );
                          setSelectedCard(
                            null
                          );
                        }}
                        className="
                          w-full
                          rounded-md
                          border
                          border-dashed
                          py-4
                          font-bold
                          text-[#F97316]
                        "
                      >
                        + Yeni Kart Ekle
                      </button>

                    </div>

                  )}


                  {/* NEW CARD */}

                  {showNewCardForm && (

                    <form
                      onSubmit={
                        handleAddCard
                      }
                      className="mt-7"
                    >

                      <input
                        type="text"
                        name="card_no"
                        value={
                          cardForm.card_no
                        }
                        onChange={
                          handleCardChange
                        }
                        maxLength={16}
                        placeholder="Kart Numarası"
                        className="
                          h-14
                          w-full
                          rounded-md
                          border
                          border-[#E6E6E6]
                          px-4
                        "
                      />

                      <input
                        type="text"
                        name="name_on_card"
                        value={
                          cardForm.name_on_card
                        }
                        onChange={
                          handleCardChange
                        }
                        placeholder="Kart Üzerindeki İsim"
                        className="
                          mt-4
                          h-14
                          w-full
                          rounded-md
                          border
                          border-[#E6E6E6]
                          px-4
                        "
                      />

                      <div className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-4
                      ">

                        <select
                          name="expire_month"
                          value={
                            cardForm.expire_month
                          }
                          onChange={
                            handleCardChange
                          }
                          className="
                            h-14
                            rounded-md
                            border
                            border-[#E6E6E6]
                            px-3
                          "
                        >

                          <option value="">
                            Ay
                          </option>

                          {months.map(
                            (month) => (
                              <option
                                key={month}
                                value={month}
                              >
                                {month}
                              </option>
                            )
                          )}

                        </select>


                        <select
                          name="expire_year"
                          value={
                            cardForm.expire_year
                          }
                          onChange={
                            handleCardChange
                          }
                          className="
                            h-14
                            rounded-md
                            border
                            border-[#E6E6E6]
                            px-3
                          "
                        >

                          <option value="">
                            Yıl
                          </option>

                          {years.map(
                            (year) => (
                              <option
                                key={year}
                                value={year}
                              >
                                {year}
                              </option>
                            )
                          )}

                        </select>

                      </div>


                      <button
                        type="submit"
                        className="
                          mt-5
                          h-14
                          w-full
                          rounded-md
                          bg-[#F97316]
                          font-bold
                          text-white
                        "
                      >
                        Kartı Kaydet
                      </button>

                    </form>

                  )}


                  {/* CVV */}

                  <div className="mt-6">

                    <label className="
                      mb-2
                      block
                      text-[14px]
                      font-bold
                    ">
                      CVV
                    </label>

                    <input
                      type="password"
                      value={cardCcv}
                      onChange={(event) =>
                        setCardCcv(
                          event.target.value
                        )
                      }
                      maxLength={4}
                      placeholder="CVV"
                      className="
                        h-14
                        w-full
                        rounded-md
                        border
                        border-[#E6E6E6]
                        bg-[#FAFAFA]
                        px-4
                      "
                    />

                  </div>


                  {/* 3D SECURE */}

                  <label className="
                    mt-6
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                  ">

                    <input
                      type="checkbox"
                      checked={
                        use3DSecure
                      }
                      onChange={(event) =>
                        setUse3DSecure(
                          event.target.checked
                        )
                      }
                      className="
                        h-5
                        w-5
                        accent-[#F97316]
                      "
                    />

                    <span className="
                      text-[14px]
                      font-bold
                    ">
                      🛡 3D Secure ile
                      ödemek istiyorum.
                    </span>

                  </label>

                </div>


                {/* INSTALLMENT */}

                <div className="p-7">

                  <h3 className="
                    text-[22px]
                    font-bold
                  ">
                    Taksit Seçenekleri
                  </h3>

                  <p className="
                    mt-1
                    text-[14px]
                    text-[#737373]
                  ">
                    Kartınıza uygun
                    taksit seçeneğini
                    seçiniz.
                  </p>


                  <div className="
                    mt-7
                    overflow-hidden
                    rounded-md
                    border
                    border-[#E6E6E6]
                  ">

                    <div className="
                      grid
                      grid-cols-2
                      bg-[#FAFAFA]
                    ">

                      <div className="
                        border-r
                        border-[#E6E6E6]
                        px-5
                        py-5
                        font-bold
                      ">
                        Taksit Sayısı
                      </div>

                      <div className="
                        px-5
                        py-5
                        font-bold
                      ">
                        Aylık Ödeme
                      </div>

                    </div>


                    <label className="
                      grid
                      cursor-pointer
                      grid-cols-2
                      border-t
                      border-[#E6E6E6]
                    ">

                      <div className="
                        flex
                        items-center
                        gap-3
                        border-r
                        border-[#E6E6E6]
                        px-5
                        py-5
                      ">

                        <input
                          type="radio"
                          name="installment"
                          defaultChecked
                          className="
                            h-5
                            w-5
                            accent-[#F97316]
                          "
                        />

                        <span className="
                          font-bold
                          text-[#F97316]
                        ">
                          Tek Çekim
                        </span>

                      </div>

                      <div className="
                        flex
                        items-center
                        px-5
                      ">

                        <span className="
                          text-[#F97316]
                        ">
                          {
                            cartTotal.toFixed(
                              2
                            )
                          }{" "}
                          TL
                        </span>

                      </div>

                    </label>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT */}
            {/* ================================================= */}

            <aside>

              {/* PAYMENT BUTTON */}

              <button
                type="button"
                onClick={
                  handlePayment
                }
                className="
                  flex
                  h-16
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  bg-[#F97316]
                  text-[16px]
                  font-bold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Ödeme Yap
              </button>


              {/* AGREEMENT */}

              <div className="
                mt-4
                rounded-md
                border
                border-[#E6E6E6]
                p-5
              ">

                <label className="
                  flex
                  cursor-pointer
                  items-start
                  gap-3
                ">

                  <input
                    type="checkbox"
                    checked={
                      agreement
                    }
                    onChange={(event) =>
                      setAgreement(
                        event.target.checked
                      )
                    }
                    className="
                      mt-1
                      h-5
                      w-5
                      accent-[#F97316]
                    "
                  />

                  <span className="
                    text-[12px]
                    leading-5
                    text-[#737373]
                  ">

                    <span className="
                      font-bold
                      underline
                    ">
                      Ön Bilgilendirme
                      Koşulları
                    </span>{" "}
                    'nı ve{" "}

                    <span className="
                      font-bold
                      underline
                    ">
                      Mesafeli Satış
                      Sözleşmesi
                    </span>{" "}
                    'ni okudum,
                    onaylıyorum.

                  </span>

                </label>

              </div>


              {/* ORDER SUMMARY */}

              <div className="
                mt-5
                rounded-md
                border
                border-[#E6E6E6]
                p-5
              ">

                <h2 className="
                  text-[24px]
                  text-[#252B42]
                ">
                  Sipariş Özeti
                </h2>


                <div className="
                  mt-7
                  flex
                  justify-between
                ">

                  <span className="
                    text-[14px]
                    text-[#737373]
                  ">
                    Ürün Toplamı
                  </span>

                  <span className="
                    text-[14px]
                  ">
                    {
                      cartTotal.toFixed(
                        2
                      )
                    }{" "}
                    TL
                  </span>

                </div>


                <div className="
                  mt-5
                  flex
                  justify-between
                ">

                  <span className="
                    text-[14px]
                    text-[#737373]
                  ">
                    Kargo Toplam
                  </span>

                  <span className="
                    text-[14px]
                  ">
                    29,99 TL
                  </span>

                </div>


                <div className="
                  mt-5
                  flex
                  justify-between
                ">

                  <span className="
                    text-[14px]
                    text-[#737373]
                  ">
                    150 TL ve Üzeri
                    Kargo Bedava
                  </span>

                  <span className="
                    text-[14px]
                    text-[#F97316]
                  ">
                    -29,99 TL
                  </span>

                </div>


                <div className="
                  my-5
                  border-t
                  border-[#E6E6E6]
                " />


                <div className="
                  flex
                  justify-between
                ">

                  <span className="
                    text-[16px]
                  ">
                    Toplam
                  </span>

                  <span className="
                    text-[20px]
                    text-[#F97316]
                  ">
                    {
                      cartTotal.toFixed(
                        2
                      )
                    }{" "}
                    TL
                  </span>

                </div>

              </div>


              {/* SECOND PAYMENT BUTTON */}

              <button
                type="button"
                onClick={
                  handlePayment
                }
                className="
                  mt-5
                  flex
                  h-16
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  bg-[#F97316]
                  text-[16px]
                  font-bold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Ödeme Yap
              </button>

            </aside>

          </div>

        )}

      </div>

    </section>
  );
}
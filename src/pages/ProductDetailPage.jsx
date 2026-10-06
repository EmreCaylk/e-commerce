import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import { addToCart } from "../store/actions/shoppingCartActions.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions.js";

import productDetail1 from "../assets/product detail 1.jpg";
import productThumb1 from "../assets/product thumb 1.jpg";
import productThumb2 from "../assets/product thumb 2.jpg";

import bestSellerProduct1 from "../assets/bestseller product 1.jpg";
import bestSellerProduct2 from "../assets/bestseller product 2.jpg";
import bestSellerProduct3 from "../assets/bestseller product 3.jpg";
import bestSellerProduct4 from "../assets/bestseller product 4.jpg";
import bestSellerProduct5 from "../assets/bestseller product 5.jpg";
import bestSellerProduct6 from "../assets/bestseller product 6.jpg";
import bestSellerProduct7 from "../assets/bestseller product 7.jpg";
import bestSellerProduct8 from "../assets/bestseller product 8.jpg";


import detailBrand1 from "../assets/brand1.png";
import detailBrand2 from "../assets/brand2.png";
import detailBrand3 from "../assets/brand3.png";
import detailBrand4 from "../assets/brand4.png";
import detailBrand5 from "../assets/brand5.png";
import detailBrand6 from "../assets/brand6.png";

import productDescription from "../assets/product description.jpg";

export default function ProductDetailPage() {
  // ================= PRODUCT DETAIL =================
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(
    (state) => state.product.product
  );

  const fetchState = useSelector(
    (state) => state.product.fetchState
  );



  // ================= FETCH PRODUCT =================
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  // ================= BESTSELLER PRODUCTS =================
  const bestsellerProducts = [
    { id: 1, image: bestSellerProduct1 },
    { id: 2, image: bestSellerProduct2 },
    { id: 3, image: bestSellerProduct3 },
    { id: 4, image: bestSellerProduct4 },
    { id: 5, image: bestSellerProduct5 },
    { id: 6, image: bestSellerProduct6 },
    { id: 7, image: bestSellerProduct7 },
    { id: 8, image: bestSellerProduct8 },
  ];
  // ================= DETAIL BRANDS =================
  const detailBrands = [
    { id: 1, image: detailBrand1 },
    { id: 2, image: detailBrand2 },
    { id: 3, image: detailBrand3 },
    { id: 4, image: detailBrand4 },
    { id: 5, image: detailBrand5 },
    { id: 6, image: detailBrand6 },
  ];
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
  if (!product) {
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
  // ================= PRODUCT DETAIL =================
  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
      {/* ================= BACK BUTTON ================= */}
      <section className="flex w-full justify-center bg-white">
        <div className="w-full max-w-262.5 px-6 pt-6 lg:px-0">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              text-sm
              font-bold
              text-[#23A6F0]
              hover:underline
            "
          >
            ← Back
          </button>
        </div>
      </section>
      {/* ================= BREADCRUMB ================= */}
      <section className="flex w-full justify-center">
        <div
          className="
            flex w-full max-w-262.5
            items-center gap-4
            px-6 py-6
            lg:px-0
          "
        >
          <Link
            to="/"
            className="text-sm font-bold text-[#252B42]"
          >
            Home
          </Link>
          <span className="text-xl font-bold text-[#BDBDBD]">
            ›
          </span>
          <Link
            to="/shop"
            className="text-sm font-bold text-[#BDBDBD]"
          >
            Shop
          </Link>
        </div>
      </section>
      {/* ================= PRODUCT DETAIL ================= */}
      <section className="flex w-full justify-center">
        <div
          className="
            flex w-full max-w-262.5
            flex-col gap-8
            px-6 pb-12
            lg:flex-row
            lg:items-start
            lg:gap-8.5
            lg:px-0
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              flex w-full flex-col
              lg:w-126.5
              lg:shrink-0
            "
          >
            {/* ================= BIG IMAGE ================= */}
            <div
              className="
                relative flex w-full
                items-center justify-center
                overflow-hidden
                bg-white
                lg:h-112.5
                lg:w-126.5
              "
            >
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="
                  h-auto w-full
                  object-cover
                  lg:h-112.5
                  lg:w-126.5
                "
              />
              {/* LEFT ARROW */}
              <button
                type="button"
                aria-label="Previous image"
                className="
                  absolute left-5 top-1/2
                  flex -translate-y-1/2
                  cursor-pointer
                  items-center justify-center
                  text-white
                "
              >
                <ChevronLeft
                  size={48}
                  strokeWidth={1.5}
                />
              </button>
              {/* RIGHT ARROW */}
              <button
                type="button"
                aria-label="Next image"
                className="
                  absolute right-5 top-1/2
                  flex -translate-y-1/2
                  cursor-pointer
                  items-center justify-center
                  text-white
                "
              >
                <ChevronRight
                  size={48}
                  strokeWidth={1.5}
                />
              </button>
            </div>
            {/* ================= THUMBNAILS ================= */}
            <div className="mt-5 flex items-center gap-5">
              <button
                type="button"
                className="
                  h-18.75 w-25
                  cursor-pointer
                  overflow-hidden
                "
              >
                {product.images?.[0]?.url && (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              )}
              </button>
              <button
                type="button"
                className="
                  h-18.75 w-25
                  cursor-pointer
                  overflow-hidden
                "
              >
               {product.images?.[1]?.url && (
              <img
                src={product.images[1].url}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            )}
              </button>
            </div>
          </div>
          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              flex w-full flex-col
              lg:h-142.75
              lg:w-127.5
              lg:shrink-0
              lg:px-6
            "
          >
            {/* ================= PRODUCT NAME ================= */}
            <h1 className="text-xl font-normal text-[#252B42]">
              {product.name}
            </h1>

            {/* ================= REVIEWS ================= */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={20}
                  fill="#F3CD03"
                  className="text-[#F3CD03]"
                />
                <Star
                  size={20}
                  fill="#F3CD03"
                  className="text-[#F3CD03]"
                />
                <Star
                  size={20}
                  fill="#F3CD03"
                  className="text-[#F3CD03]"
                />
                <Star
                  size={20}
                  fill="#F3CD03"
                  className="text-[#F3CD03]"
                />
                 <span className="text-sm text-[#737373]">
                  {product.rating}
                </span>
                <Star
                  size={20}
                  className="text-[#F3CD03]"
                />
              </div>

              <span className="text-sm font-bold text-[#737373]">
                10 Reviews
              </span>

            </div>
            {/* ================= PRICE ================= */}
            <p className="mt-5 text-2xl font-bold text-[#252B42]">
              ${product.price}
            </p>

            {/* ================= AVAILABILITY ================= */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-bold text-[#737373]">
                Availability :
              </span>
              <span
              className={`text-sm font-bold ${
                product.stock > 0
                  ? "text-[#23856D]"
                  : "text-red-500"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
              <span className="text-sm font-bold text-[#23A6F0]">
                In Stock
              </span>
            </div>
            {/* ================= DESCRIPTION ================= */}
            <p
              className="
                mt-8 max-w-111.25
                text-sm leading-5
                text-[#858585]
              "
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor
              do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
            {/* ================= DIVIDER ================= */}
            <div className="mt-7 h-px w-full bg-[#BDBDBD]"></div>
            {/* ================= COLORS ================= */}
            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                aria-label="Blue"
                className="
                  h-7.5 w-7.5
                  cursor-pointer
                  rounded-full
                  bg-[#23A6F0]
                "
              ></button>
              <button
                type="button"
                aria-label="Green"
                className="
                  h-7.5 w-7.5
                  cursor-pointer
                  rounded-full
                  bg-[#2DC071]
                "
              ></button>
              <button
                type="button"
                aria-label="Orange"
                className="
                  h-7.5 w-7.5
                  cursor-pointer
                  rounded-full
                  bg-[#E77C40]
                "
              ></button>
              <button
                type="button"
                aria-label="Dark Blue"
                className="
                  h-7.5 w-7.5
                  cursor-pointer
                  rounded-full
                  bg-[#252B42]
                "
              ></button>
            </div>
            {/* ================= ACTIONS ================= */}
            <div
              className="
                mt-12 flex flex-wrap
                items-center gap-3
              "
            >
              {/* SELECT OPTIONS */}
              <button
                type="button"
                className="
                  flex h-11
                  cursor-pointer
                  items-center justify-center
                  rounded-md
                  bg-[#23A6F0]
                  px-5
                  text-sm font-bold
                  text-white
                "
              >
                Select Options
              </button>
              {/* FAVORITE */}
              <button
                type="button"
                aria-label="Add to favorites"
                className="
                  flex h-10 w-10
                  cursor-pointer
                  items-center justify-center
                  rounded-full
                  border border-[#E8E8E8]
                  bg-white
                  text-[#252B42]
                "
              >
                <Heart size={18} />
              </button>
              {/* CART */}
              <button
                type="button"
                aria-label="Add to cart"
                onClick={()=>dispatch(addToCart(product))}
                className="
                  flex h-1040px]
                  cursor-pointer
                  items-center justify-center
                  rounded-full
                  border border-[#E8E8E8]
                  bg-white
                  text-[#252B42]
                "
              >
                <ShoppingCart size={18} />
              </button>
              {/* VIEW */}
              <button
                type="button"
                aria-label="View product"
                className="
                  flex h-10 w-10
                  cursor-pointer
                  items-center justify-center
                  rounded-full
                  border border-[#E8E8E8]
                  bg-white
                  text-[#252B42]
                "
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    {/* ================= DESCRIPTION SECTION ================= */}
<section className="flex w-full justify-center bg-white">
  <div
    className="
      flex w-full max-w-262.5
      flex-col px-6
      lg:px-0
    "
  >
    {/* ================= TABS ================= */}
    <div
      className="
        flex w-full items-center justify-center
        gap-5 border-b border-[#ECECEC]
        py-6
        lg:gap-12
      "
    >
      <button
        type="button"
        className="
          cursor-pointer
          text-sm font-semibold
          text-[#737373]
        "
      >
        Description
      </button>
      <button
        type="button"
        className="
          cursor-pointer
          text-sm font-semibold
          text-[#737373]
        "
      >
        Additional Information
      </button>
      <button
        type="button"
        className="
          cursor-pointer
          text-sm font-semibold
          text-[#737373]
        "
      >
        Reviews
        <span className="ml-2 font-bold text-[#23856D]">
          (0)
        </span>
      </button>
    </div>
    {/* ================= DESCRIPTION CONTENT ================= */}
    <div
      className="
        flex w-full flex-col
        gap-10 py-10
        lg:flex-row
        lg:items-start
        lg:justify-between
        lg:gap-7.5
      "
    >
      {/* ================= LEFT IMAGE ================= */}
      <div
        className="
          flex w-full shrink-0
          overflow-hidden rounded-md
          lg:w-83
        "
      >
        <img
          src={productDescription}
          alt="Product description"
          className="
            h-auto w-full
            object-cover
            lg:h-98
            lg:w-83
          "
        />
      </div>
      {/* ================= MIDDLE TEXT ================= */}
      <div
        className="
          flex w-full flex-col
          lg:w-83
          lg:shrink-0
        "
      >
        <h2
          className="
            text-2xl font-bold
            leading-8 text-[#252B42]
          "
        >
          the quick fox jumps over
        </h2>
        <p
          className="
            mt-7 text-sm
            leading-5 text-[#737373]
          "
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do
          met sent. RELIT official consequent door ENIM RELIT Mollie.
          Excitation venial consequent sent nostrum met.
        </p>
        <p
          className="
            mt-7 border-l-[3px]
            border-[#23856D]
            pl-6 text-sm
            leading-5 text-[#737373]
          "
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do
          met sent. RELIT official consequent door ENIM RELIT Mollie.
          Excitation venial consequent sent nostrum met.
        </p>
        <p
          className="
            mt-7 text-sm
            leading-5 text-[#737373]
          "
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do
          met sent. RELIT official consequent door ENIM RELIT Mollie.
          Excitation venial consequent sent nostrum met.
        </p>
      </div>
      {/* ================= RIGHT TEXT ================= */}
      <div
        className="
          flex w-full flex-col
          lg:w-81.5
          lg:shrink-0
        "
      >
        {/* FIRST LIST */}
        <h2
          className="
            text-2xl font-bold
            leading-8 text-[#252B42]
          "
        >
          the quick fox jumps over
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
        {/* SECOND LIST */}
        <h2
          className="
            mt-8 text-2xl font-bold
            leading-8 text-[#252B42]
          "
        >
          the quick fox jumps over
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-[#737373]">
              ›
            </span>
            <p className="text-sm font-bold leading-6 text-[#737373]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
           <section
  className="
    flex w-full justify-center
    bg-[#FAFAFA]
    lg:h-271.5
  "
>
  <div
    className="
      flex w-full flex-col
      px-6 py-12
      lg:h-271.5
      lg:w-360
      lg:px-48.75
      lg:py-12
    "
  >
    {/* ================= TITLE ================= */}
    <div
      className="
        flex w-full
        border-b border-[#ECECEC]
        pb-6
      "
    >
      <h2 className="text-2xl font-bold text-[#252B42]">
        BESTSELLER PRODUCTS
      </h2>
    </div>
    {/* ================= PRODUCTS ================= */}
    <div
      className="
        mt-6 flex w-full
        flex-wrap
        items-start justify-center
        gap-x-7.5 gap-y-7.5
        lg:justify-start
      "
    >
      {bestsellerProducts.map((product) => (
        <div
          key={product.id}
          className="
            flex w-60
            shrink-0 flex-col
            bg-white
          "
        >
          {/* PRODUCT IMAGE */}
          <img
            src={product.image}
            alt={`Bestseller Product ${product.id}`}
            className="
              h-70 w-60
              object-cover
            "
          />
          {/* PRODUCT INFO */}
          <div
            className="
              flex w-full flex-col
              px-6 py-6
            "
          >
            <h3 className="text-base font-bold text-[#252B42]">
              Graphic Design
            </h3>
            <p className="mt-2 text-sm font-bold text-[#737373]">
              English Department
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-base font-bold text-[#BDBDBD]">
                $16.48
              </span>
              <span className="text-base font-bold text-[#23856D]">
                $6.48
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
            {/* ================= PRODUCT DETAIL BRANDS ================= */}
        <section className="flex w-full justify-center bg-[#FAFAFA]">
            <div className="
            flex w-full max-w-262.5
            flex-col items-center justify-center
            gap-12 px-6 py-14
            md:flex-row md:flex-wrap
            lg:flex-nowrap lg:justify-between
            lg:px-0
            "
            >
                {detailBrands.map((detailBrand)=>(
                    <div
                    key={detailBrand.id}
                    className="
                    flex h-20 w-30
                    shrink-0 items-center justify-center"
                    >
                     <img 
                     src={detailBrand.image} 
                     alt={`Brand ${detailBrand.id}`}
                     className="max-h-full max-w-full object-contain"
                     />       
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
}
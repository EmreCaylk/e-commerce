import { Link, useParams } from "react-router-dom";
import { LayoutGrid, List } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, setOffset } from "../store/actions/productActions.js";


import shop1 from "../assets/shop1.jpg";
import shop2 from "../assets/shop2.jpg";
import shop3 from "../assets/shop3.jpg";
import shop4 from "../assets/shop4.jpg";
import shop5 from "../assets/shop5.jpg";

import product1 from "../assets/shop product 1.jpg";
import product2 from "../assets/shop product 2.jpg";
import product3 from "../assets/shop product 3.jpg";
import product4 from "../assets/shop product 4.jpg";
import product5 from "../assets/shop product 5.jpg";
import product6 from "../assets/shop product 6.jpg";
import product7 from "../assets/shop product 7.jpg";
import product8 from "../assets/shop product 8.jpg";
import product9 from "../assets/shop product 9.jpg";
import product10 from "../assets/shop product 10.jpg";
import product11 from "../assets/shop product 11.jpg";
import product12 from "../assets/shop product 12.jpg";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";

export default function ShopPage() {
  const categories = [
    { id: 1, image: shop1 },
    { id: 2, image: shop2 },
    { id: 3, image: shop3 },
    { id: 4, image: shop4 },
    { id: 5, image: shop5 },
  ];

  const products = [
    { id: 1, image: product1 },
    { id: 2, image: product2 },
    { id: 3, image: product3 },
    { id: 4, image: product4 },
    { id: 5, image: product5 },
    { id: 6, image: product6 },
    { id: 7, image: product7 },
    { id: 8, image: product8 },
    { id: 9, image: product9 },
    { id: 10, image: product10 },
    { id: 11, image: product11 },
    { id: 12, image: product12 },
  ];

  const brands = [
    { id: 1, image: brand1 },
    { id: 2, image: brand2 },
    { id: 3, image: brand3 },
    { id: 4, image: brand4 },
    { id: 5, image: brand5 },
    { id: 6, image: brand6 },
  ];


  

    
  const [filter, setFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [sort, setSort] = useState("");

  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const productList = useSelector(
    (state) => state.product.productList
  );

  const fetchState = useSelector(
    (state) => state.product.fetchState
  );

  const total = useSelector(
    (state) => state.product.total
  );

  const limit = useSelector(
    (state) => state.product.limit
  );

  const offset = useSelector(
    (state) => state.product.offset
  );

  const totalPages = Math.ceil(total / limit);
  const activePage = Math.floor(offset / limit) + 1;

  // T15 - API isteği
  useEffect(() => {
    dispatch(
      fetchProducts(
        categoryId,
        filter,
        sort,
        limit,
        offset
      )
    );
  }, [categoryId, filter, sort, limit, offset, dispatch]);

  
  const handlePageChange = (page) => {
    const newOffset = (page - 1) * limit;

    dispatch(
      fetchProducts(
        categoryId,
        filter,
        sort,
        limit,
        newOffset
      )
    );
  };

  return (
     <>
    <div className="flex w-full flex-col">
      {/* ================= SHOP TOP ================= */}
      <section className="flex w-full justify-center bg-[#FAFAFA]">
        <div
          className="
            flex w-full max-w-360 flex-col
            px-6 py-8
            lg:px-48.75 lg:py-6
          "
        >
          {/* TITLE + BREADCRUMB */}
          <div
            className="
              flex w-full flex-col items-center gap-5
              lg:flex-row lg:justify-between
            "
          >
            <h1 className="text-2xl font-bold text-[#252B42]">
              Shop
            </h1>

            <div className="flex items-center gap-4 text-sm font-bold">
              <Link to="/" className="text-[#252B42]">
                Home
              </Link>

              <span className="text-xl text-[#BDBDBD]">
                ›
              </span>

              <span className="text-[#BDBDBD]">
                Shop
              </span>
            </div>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div
            className="
              mt-8 flex w-full flex-col
              items-center justify-center gap-4
              md:flex-row md:flex-wrap
              lg:flex-nowrap
            "
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="
                  relative flex h-55.75 w-full
                  max-w-51.25 shrink-0
                  items-center justify-center
                  overflow-hidden
                "
              >
                <img
                  src={category.image}
                  alt="Shop category"
                  className="absolute h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25"></div>

                <div
                  className="
                    relative z-10 flex flex-col
                    items-center text-center text-white
                  "
                >
                  <h2 className="text-base font-bold">
                    CLOTHS
                  </h2>

                  <p className="mt-2 text-sm font-bold">
                    5 Items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* ================= FILTER ROW ================= */}
              <section className="flex w-full justify-center bg-white">
            <div
              className="
                flex w-full max-w-262.5 flex-col
                items-center gap-6 px-6 py-6
                lg:flex-row lg:justify-between
                lg:px-0
              "
            >
              {/* RESULTS */}

              <p className="text-sm font-bold text-[#737373]">
                 Showing all {total} results
              </p>

              {/* VIEWS */}

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#737373]">
                  Views:
                </span>

                <button
                  type="button"
                  className="
                    flex h-11.5 w-11.5
                    cursor-pointer items-center justify-center
                    rounded-md border border-[#ECECEC]
                    bg-white text-[#252B42]
                  "
                >
                  <LayoutGrid size={18} />
                </button>

                <button
                  type="button"
                  className="
                    flex h-11.5 w-11.5
                    cursor-pointer items-center justify-center
                    rounded-md border border-[#ECECEC]
                    bg-white text-[#737373]
                  "
                >
                  <List size={18} />
                </button>
              </div>

              {/* FILTER + SORT */}

              <div
                className="
                  flex flex-col items-center gap-4
                  sm:flex-row
                "
              >
                {/* FILTER INPUT */}

                <input
                  type="text"
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  placeholder="Search products..."
                  className="
                    h-12.5 w-45
                    rounded-md
                    border border-[#DDDDDD]
                    bg-[#F9F9F9] px-4
                    text-sm text-[#737373]
                    outline-none
                  "
                />

                {/* SORT SELECT */}

                <select
                  value={selectedSort}
                  onChange={(event) =>
                    setSelectedSort(event.target.value)
                  }
                  className="
                    h-12.5 w-45
                    cursor-pointer rounded-md
                    border border-[#DDDDDD]
                    bg-[#F9F9F9] px-4
                    text-sm text-[#737373]
                    outline-none
                  "
                >
                  <option value="">
                    Sort
                  </option>

                  <option value="price:asc">
                    Price: Low to High
                  </option>

                  <option value="price:desc">
                    Price: High to Low
                  </option>

                  <option value="rating:asc">
                    Rating: Low to High
                  </option>

                  <option value="rating:desc">
                    Rating: High to Low
                  </option>
                </select>

                {/* FILTER BUTTON */}

                <button
                  type="button"
                  onClick={() => {
                    setSort(selectedSort);
                    setCurrentPage(3);
                  }}
                  className="
                    flex h-12.5
                    cursor-pointer items-center justify-center
                    rounded-md bg-[#23A6F0]
                    px-6 text-sm font-bold text-white
                  "
                >
                  Filter
                </button>
              </div>
            </div>
          </section>

          {/* ================= PRODUCTS ================= */}

      <section className="flex w-full justify-center bg-white">
        <div
          className="
            flex w-full max-w-262.5
            flex-wrap items-start justify-center
            gap-x-7.5 gap-y-12.5
            px-6 py-12
            lg:px-0
          "
        >
          {/* ================= PAGE 1 ================= */}

          {activePage === 1  &&
            products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="
                  flex w-59.5 shrink-0
                  cursor-pointer flex-col
                  items-center bg-white
                  no-underline
                "
              >
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="
                    h-75 w-59.5
                    object-cover
                  "
                />

                <div
                  className="
                    flex w-full flex-col
                    items-center px-5 py-6
                    text-center
                  "
                >
                  <h3 className="text-base font-bold text-[#252B42]">
                    Graphic Design
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#737373]">
                    English Department
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-base font-bold text-[#BDBDBD]">
                      $16.48
                    </span>

                    <span className="text-base font-bold text-[#23856D]">
                      $6.48
                    </span>
                  </div>

                  <div
                    className="
                      mt-4 flex h-4 w-20.5
                      items-center justify-between
                    "
                  >
                    <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
                  </div>
                </div>
              </Link>
            ))}

          {/* ================= PAGE 2 LOADING ================= */}

          {activePage  === 2 && fetchState === "FETCHING" && (
            <div className="flex min-h-100 w-full items-center justify-center">
              <div
                className="
                  h-12 w-12
                  animate-spin rounded-full
                  border-4 border-[#E6E6E6]
                  border-t-[#23A6F0]
                "
              ></div>
            </div>
          )}

          {/* ================= PAGE 2 - T13 ================= */}

          {activePage  === 2 &&
            fetchState !== "FETCHING" &&
            productList.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="
                  flex w-59.5 shrink-0
                  cursor-pointer flex-col
                  items-center bg-white
                  no-underline
                "
              >
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="
                    h-75 w-59.5
                    object-cover
                  "
                />

                <div
                  className="
                    flex w-full flex-col
                    items-center px-5 py-6
                    text-center
                  "
                >
                  <h3 className="text-base font-bold text-[#252B42]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#737373]">
                    {product.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-base font-bold text-[#BDBDBD]">
                      $16.48
                    </span>

                    <span className="text-base font-bold text-[#23856D]">
                      ${product.price}
                    </span>
                  </div>

                  <div
                    className="
                      mt-4 flex h-4 w-20.5
                      items-center justify-between
                    "
                  >
                    <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
                    <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
</section>
        {/* ================= PAGE 3 - T14 LOADING ================= */}
        {activePage  === 3 && fetchState === "FETCHING" && (
          <div className="flex min-h-100 w-full items-center justify-center">
            <div className="
            h-12 w-12
            animate-spin rounded-full
            border-4 border-[#E6E6E6]
            border-t-[#23A6F0]            
           "
           >
            </div>

          </div>
        )}
                  {/* ================= PAGE 3 - T14 ================= */}

        {activePage  === 3 && (
          <section className="flex w-full justify-center bg-white">
            <div
              className="
                flex w-full max-w-262.5
                flex-wrap items-start justify-center
                gap-x-7.5 gap-y-12.5
                px-6 py-12
                lg:px-0
              "
            >
              {/* LOADING */}

              {fetchState === "FETCHING" && (
                <div className="flex min-h-100 w-full items-center justify-center">
                  <div
                    className="
                      h-12 w-12
                      animate-spin rounded-full
                      border-4 border-[#E6E6E6]
                      border-t-[#23A6F0]
                    "
                  ></div>
                </div>
              )}

              {/* ERROR */}

              {fetchState === "FAILED" && (
                <div className="flex min-h-50 w-full items-center justify-center">
                  <p className="font-bold text-red-500">
                    Ürünler yüklenirken hata oluştu.
                  </p>
                </div>
              )}

              {/* EMPTY */}

              {fetchState === "FETCHED" && productList.length === 0 && (
                <div className="flex min-h-50 w-full items-center justify-center">
                  <p className="font-bold text-[#737373]">
                    Bu filtreye uygun ürün bulunamadı.
                  </p>
                </div>
              )}

              {/* PRODUCTS */}

              {fetchState === "FETCHED" &&
                productList.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="
                      flex w-59.5 shrink-0
                      cursor-pointer flex-col
                      items-center bg-white
                      no-underline
                    "
                  >
                    <img
                      src={product.images?.[0]?.url}
                      alt={product.name}
                      className="
                        h-75 w-59.5
                        object-cover
                      "
                    />

                    <div
                      className="
                        flex w-full flex-col
                        items-center px-5 py-6
                        text-center
                      "
                    >
                      <h3 className="text-base font-bold text-[#252B42]">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-[#737373]">
                        {product.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-base font-bold text-[#23856D]">
                          ${product.price}
                        </span>
                      </div>

                      <div className="mt-4 flex h-4 w-20.5 items-center justify-between">
                        <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
                        <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
                        <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
                        <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        )}
                  {/* ================= T15 PAGINATION ================= */}

            <section className="flex w-full justify-center bg-white py-12">
              <div
                className="
                  flex max-w-full
                  items-center overflow-hidden
                  rounded-md border border-[#BDBDBD]
                "
              >
                {/* FIRST */}

                <button
                  type="button"
                  onClick={() => handlePageChange(1)}
                  disabled={activePage === 1}
                  className="
                  cursor-pointer
                    flex h-18.5 shrink-0 px-5
                    items-center justify-center
                    border-r border-[#BDBDBD]
                    bg-[#F3F3F3]
                    text-sm font-bold text-[#BDBDBD]
                    disabled:cursor-not-allowed
                  "
                >
                  First
                </button>

                {/* 1 - 6 */}

                {Array.from(
                  {
                    length: Math.min(totalPages, 6),
                  },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`
                      cursor-pointer
                      flex h-18.5 w-12.25 shrink-0
                      cursor-pointer items-center justify-center
                      border-r border-[#BDBDBD]
                      text-sm font-bold
                      ${
                        activePage === page
                          ? "bg-[#23A6F0] text-white"
                          : "bg-white text-[#23A6F0]"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

                {/* ... */}

                {totalPages > 6 && (
                  <span
                    className="
                    cursor-pointer
                      flex h-18.5 w-12.25 shrink-0
                      items-center justify-center
                      border-r border-[#BDBDBD]
                      bg-white
                      text-sm font-bold text-[#737373]
                    "
                  >
                    ...
                  </span>
                )}

                {/* LAST PAGE */}

                {totalPages > 6 && (
                  <button
                    type="button"
                    onClick={() => handlePageChange(totalPages)}
                    className={`
                      flex h-18.5 w-12.25 shrink-0
                      cursor-pointer items-center justify-center
                      border-r border-[#BDBDBD]
                      text-sm font-bold
                      ${
                        activePage === totalPages
                          ? "bg-[#23A6F0] text-white"
                          : "bg-white text-[#23A6F0]"
                      }
                    `}
                  >
                    {totalPages}
                  </button>
                )}

                {/* NEXT */}

                <button
                  type="button"
                  onClick={() => handlePageChange(activePage + 1)}
                  disabled={activePage === totalPages}
                  className="
                  cursor-pointer
                    flex h-18.5 shrink-0 px-5
                    items-center justify-center
                    bg-white
                    text-sm font-bold text-[#23A6F0]
                    disabled:cursor-not-allowed
                    disabled:text-[#BDBDBD]
                  "
                >
                  Next
                </button>
              </div>
            </section>
              
      {/* ================= BRANDS ================= */}
      <section className="flex w-full justify-center bg-[#FAFAFA]">
        <div
          className="
            flex w-full max-w-262.5
            flex-col items-center justify-center
            gap-12 px-6 py-14
            md:flex-row md:flex-wrap
            lg:flex-nowrap lg:justify-between
          "
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                flex h-20 w-30
                shrink-0 items-center justify-center
              "
            >
              <img
                src={brand.image}
                alt={`Brand ${brand.id}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      
    </div>
    </>
  );
}

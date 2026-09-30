import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import { ChevronDown } from "lucide-react";

import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Phone,
  Mail,
} from "lucide-react";

export default function Header() {
  const location = useLocation();

  // ================= REDUX USER =================

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);

  const womenCategories = categories.filter(
    (category) => category.gender === "k"
  );

const menCategories = categories.filter(
  (category) => category.gender === "e"
);

  const isLoggedIn =
    user &&
    Object.keys(user).length > 0 &&
    user.email;

  // ================= HEADER COLOR =================

  const isGreenPage =
    location.pathname.startsWith("/shop") ||
    location.pathname.startsWith("/product");

  return (
    <header className="w-full bg-white">

      {/* ================= TOP BAR ================= */}

      <div
        className={`hidden w-full text-white lg:block ${
          isGreenPage ? "bg-[#23856D]" : "bg-[#252B42]"
        }`}
      >
        <div className="mx-auto flex h-14.5 max-w-360 items-center justify-between px-8">

          {/* LEFT */}

          <div className="flex items-center gap-7.5">
            <div className="flex items-center gap-2">
              <Phone size={16} />

              <span className="text-[14px] font-bold">
                (225) 555-0118
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />

              <span className="text-[14px] font-bold">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          {/* CENTER */}

          <span className="text-[14px] font-bold">
            Follow Us and get a chance to win 80% off
          </span>

          {/* RIGHT */}

          <div className="flex items-center gap-3">
            <span className="text-[14px] font-bold">
              Follow Us :
            </span>

            <span>◎</span>
            <span className="font-bold">f</span>
            <span>▶</span>
            <span>●</span>
          </div>

        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}

      <div className="w-full bg-white">
        <div
          className="
            mx-auto
            flex
            min-h-20
            max-w-360
            items-center
            px-8
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="
              shrink-0
              text-[24px]
              font-bold
              text-[#252B42]
            "
          >
            Bandage
          </Link>

          {/* ================= NAVIGATION ================= */}

          <nav
            className="
              ml-17.5
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            <Link
              to="/"
              className="text-[16px] font-normal text-[#737373] hover:text-[#23A6F0]"
            >
              Home
            </Link>
        {/* ================= SHOP DROPDOWN ================= */}
            <div className="group relative">
              <Link
              to="/shop"
              className="
                flex
                items-center
                gap-1
                text-[16px]
                font-normal
                text-[#737373]
                hover:text-[#23A6F0]
                
              "              
              >
             Shop 
              <span className="text-[12px]">
                <ChevronDown size={16} />
              </span>             
              </Link>

               {/* DROPDOWN */}

               <div className="
                invisible
                absolute
                left-0
                top-full
                z-50
                pt-4
                opacity-0
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
               "  
               >
                <div className="
                grid
                min-w-107.5
                grid-cols-2
                gap-12.5
                bg-white
                px-7
                py-6
                shadow-1g
                "
                >
                   {/* KADIN */}
                   <div className="flex flex-col gap-3">
                    <h3 className="mb-2 text-[16px] font-bold text-[#252B42]">
                      Kadın
                    </h3>

                    {womenCategories.map((category)=> (
                      <Link
                      key={category.id}
                      to={`/shop/kadin/${category.code.split(":")[1]}/${category.id}`}
                      className="text-[14px] font-semibold text-[#737373] hover:text-[#23A6F0]"
                      >
                      {category.title}
                      </Link>
                    ))}
                   </div>
                   {/* ERKEK */}
                   <div className="flex flex-col gap-3">
                  <h3 className="mb-2 text-[16px] font-bold text-[#252B42]">
                    Erkek
                  </h3>

                  {menCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/shop/erkek/${category.code.split(":")[1]}/${category.id}`}
                      className="text-[14px] font-semibold text-[#737373] hover:text-[#23A6F0]"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
                </div>
              </div>
              

            </div>

            <Link
              to="/about"
              className="text-[16px] font-normal text-[#737373] hover:text-[#23A6F0]"
            >
              About
            </Link>

            <Link
              to="/team"
              className="text-[16px] font-normal text-[#737373] hover:text-[#23A6F0]"
            >
              Team
            </Link>

            <Link
              to="/contact"
              className="text-[16px] font-normal text-[#737373] hover:text-[#23A6F0]"
            >
              Contact
            </Link>

            <span className="text-[16px] font-normal text-[#737373]">
              Pages
            </span>
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-4.5
              text-[#23A6F0]
            "
          >

            {/* USER */}

            {isLoggedIn ? (
              <div className="hidden items-center gap-2.5 lg:flex">

                <Gravatar
                  email={user.email}
                  size={36}
                  rating="pg"
                  default="mp"
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <span className="max-w-30 truncate text-[14px] font-bold text-[#23A6F0]">
                    {user.name || "User"}
                  </span>

                  <span className="max-w-37.5 truncate text-[11px] text-[#737373]">
                    {user.email}
                  </span>
                </div>

              </div>
            ) : (
              <div className="hidden items-center gap-1.5 lg:flex">
                <User size={16} />

                <span className="text-[14px] font-bold">
                  <Link
                    to="/login"
                    className="hover:underline"
                  >
                    Login
                  </Link>

                  {" / "}

                  <Link
                    to="/signup"
                    className="hover:underline"
                  >
                    Register
                  </Link>
                </span>
              </div>
            )}

            {/* SEARCH */}

            <button
              type="button"
              className="hidden lg:block"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* CART */}

            <button
              type="button"
              className="hidden items-center gap-1 lg:flex"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              <span className="text-[12px]">1</span>
            </button>

            {/* HEART */}

            <button
              type="button"
              className="hidden items-center gap-1 lg:flex"
              aria-label="Favorites"
            >
              <Heart size={20} />
              <span className="text-[12px]">1</span>
            </button>

            {/* ================= MOBILE ================= */}

            <div className="flex items-center gap-5 lg:hidden">

              {isLoggedIn ? (
                <Gravatar
                  email={user.email}
                  size={32}
                  rating="pg"
                  default="mp"
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <Link to="/login">
                  <User size={22} />
                </Link>
              )}

              <Search size={22} />
              <ShoppingCart size={22} />
              <Menu size={24} />

            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
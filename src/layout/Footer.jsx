import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-white">

      {/* BANDAGE TOP */}
      <div className="flex w-full justify-center bg-[#FAFAFA]">
        <div
          className="
            flex w-full max-w-360 flex-col
            gap-6 px-8 py-10
            lg:h-35.5 lg:flex-row
            lg:items-center lg:justify-between
            lg:px-48.75 lg:py-0
          "
        >
          {/* LOGO */}
          <h2 className="text-2xl font-bold text-[#252B42]">
            Bandage
          </h2>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-5 text-[#23A6F0]">
            <FaFacebook
              size={24}
              className="cursor-pointer"
            />

            <FaInstagram
              size={24}
              className="cursor-pointer"
            />

            <FaTwitter
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/*  FOOTER LINKS */}
      <div className="flex w-full justify-center bg-white">
        <div
          className="
            flex w-full max-w-360
            flex-col gap-10 px-8 py-12
            lg:flex-row lg:justify-between
            lg:px-48.75
          "
        >
          {/* COMPANY INFO */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#252B42]">
              Company Info
            </h3>

            <a href="#" className="text-sm font-bold text-[#737373]">
              About Us
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Carrier
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              We are hiring
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Blog
            </a>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#252B42]">
              Legal
            </h3>

            <a href="#" className="text-sm font-bold text-[#737373]">
              About Us
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Carrier
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              We are hiring
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Blog
            </a>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#252B42]">
              Features
            </h3>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Business Marketing
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              User Analytic
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Live Chat
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Unlimited Support
            </a>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#252B42]">
              Resources
            </h3>

            <a href="#" className="text-sm font-bold text-[#737373]">
              IOS & Android
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Watch a Demo
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              Customers
            </a>

            <a href="#" className="text-sm font-bold text-[#737373]">
              API
            </a>
          </div>

          {/* GET IN TOUCH */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-[#252B42]">
              Get In Touch
            </h3>

            <div className="flex w-full max-w-80.25">
              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-14.5 min-w-0 flex-1
                  rounded-l-md border border-[#E6E6E6]
                  bg-[#F9F9F9] px-5
                  text-sm text-[#737373]
                  outline-none
                "
              />

              <button
                type="button"
                className="
                  h-14.5 cursor-pointer
                  rounded-r-md border border-[#23A6F0]
                  bg-[#23A6F0] px-5
                  text-sm text-white
                "
              >
                Subscribe
              </button>
            </div>

            <p className="text-xs text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/*  COPYRIGHT  */}
      <div className="flex w-full justify-center bg-[#FAFAFA]">
        <div
          className="
            flex w-full max-w-360
            items-center px-8 py-6
            lg:px-48.75
          "
        >
          <p className="text-sm font-bold text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}
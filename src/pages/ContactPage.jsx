import { Link } from "react-router-dom";

import workWith from "../assets/work with.jpg";
import questions from "../assets/questions.jpg";
import contactUs from "../assets/contact us.jpg";

import twitterLogo from "../assets/twitter logo.png";
import facebookLogo from "../assets/facebook logo.png";
import instagramLogo from "../assets/instagram logo.png";
import linkedinLogo from "../assets/linkedin logo.png";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col bg-white">

      {/* =====================================================
          GET ANSWERS TO ALL YOUR QUESTIONS
      ===================================================== */}
      <section className="flex w-full justify-center bg-white">
        <div
          className="
            flex w-full flex-col
            items-center justify-center
            px-6 py-20
            text-center
            lg:min-h-127.5
            lg:max-w-262.5
            lg:px-0
          "
        >
          {/* TITLE */}
          <h1
            className="
              max-w-130
              text-[40px] font-bold
              leading-12.5
              text-[#252B42]
            "
          >
            Get answers to all your
            <br className="hidden lg:block" />
            questions.
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 max-w-117.5
              text-sm leading-5
              text-[#737373]
            "
          >
            Problems trying to resolve the conflict between the two
            major realms of Classical physics:
          </p>

          {/* BUTTON */}
          <button
            type="button"
            className="
              mt-7
              cursor-pointer
              rounded-md
              bg-[#23A6F0]
              px-10 py-4
              text-sm font-bold
              text-white
            "
          >
            CONTACT OUR COMPANY
          </button>

          {/* SOCIAL MEDIA */}
          <div
            className="
              mt-7 flex
              items-center justify-center
              gap-6
            "
          >
            <img
              src={twitterLogo}
              alt="Twitter"
              className="h-6 w-6 object-contain"
            />

            <img
              src={facebookLogo}
              alt="Facebook"
              className="h-6 w-6 object-contain"
            />

            <img
              src={instagramLogo}
              alt="Instagram"
              className="h-6 w-6 object-contain"
            />

            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          QUESTIONS & ANSWERS
      ===================================================== */}
      <section className="flex w-full justify-center bg-white">
        <div
          className="
            relative flex w-full
            items-center justify-center
            overflow-hidden
            lg:h-111.5
            lg:max-w-360
          "
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={questions}
            alt="Questions and Answers"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex w-full flex-col
              items-center justify-center
              px-6 py-20
              text-center
              lg:h-111.5
              lg:px-0
              lg:py-0
            "
          >
            <h2
              className="
                text-[40px] font-bold
                leading-12.5
                text-[#252B42]
              "
            >
              Questions &amp; Answers
            </h2>

            <p
              className="
                mt-5 max-w-117.5
                text-sm leading-5
                text-[#737373]
              "
            >
              Problems trying to resolve the conflict between the two
              major realms of Classical physics:
            </p>

            <Link
              to="/contact"
              className="
                mt-6
                text-sm font-bold
                text-[#23A6F0]
              "
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* WHITE SPACE*/}
      <div className="h-10 w-full bg-white"></div>

      {/* CONTACT US*/}
      <section className="flex w-full justify-center bg-white">
        <div
          className="
            relative flex w-full
            overflow-hidden
            lg:h-189.25
            lg:max-w-360
          "
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={contactUs}
            alt="Contact Us"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex w-full flex-col
              px-8 py-16
              text-white
              lg:h-189.25
              lg:px-0
              lg:py-0
            "
          >
            {/* ================= LEFT SIDE ================= */}
            <div
              className="
                flex flex-col
                items-start
                text-left
                lg:absolute
                lg:left-48.75
                lg:top-57.5
                lg:w-90
              "
            >
              <h2
                className="
                  text-[40px] font-bold
                  leading-12.5
                "
              >
                CONTACT US
              </h2>

              <p
                className="
                  mt-6 max-w-82.5
                  text-sm leading-5
                "
              >
                Problems trying to resolve the conflict between the two
                major realms of Classical physics:
              </p>

              <button
                type="button"
                className="
                  mt-7
                  cursor-pointer
                  rounded-md
                  bg-[#23A6F0]
                  px-8 py-4
                  text-sm font-bold
                  text-white
                "
              >
                CONTACT US
              </button>
            </div>

            {/* ================= LOCATIONS ================= */}
            <div
              className="
                mt-14 flex
                flex-col gap-10
                lg:absolute
                lg:right-36.25
                lg:top-33.75
                lg:mt-0
                lg:w-120
                lg:flex-row
                lg:flex-wrap
                lg:gap-x-12
                lg:gap-y-12
              "
            >
              {/* PARIS */}
              <div className="flex w-47.5 flex-col">
                <h3 className="text-xl font-bold">
                  Paris
                </h3>

                <p className="mt-4 text-sm">
                  1901 Thorn ridge Cir.
                </p>

                <p className="mt-4 text-sm">
                  75000 Paris
                </p>

                <p className="mt-4 text-sm">
                  Phone : +451 215 215
                </p>

                <p className="mt-4 text-sm">
                  Fax : +451 215 215
                </p>
              </div>

              {/* NEW YORK */}
              <div className="flex w-47.5 flex-col">
                <h3 className="text-xl font-bold">
                  New York
                </h3>

                <p className="mt-4 text-sm">
                  2715 Ash Dr. San Jose,
                </p>

                <p className="mt-4 text-sm">
                  75000 Paris
                </p>

                <p className="mt-4 text-sm">
                  Phone : +451 215 215
                </p>

                <p className="mt-4 text-sm">
                  Fax : +451 215 215
                </p>
              </div>

              {/* BERLIN */}
              <div className="flex w-47.5 flex-col">
                <h3 className="text-xl font-bold">
                  Berlin
                </h3>

                <p className="mt-4 text-sm">
                  4140 Parker Rd.
                </p>

                <p className="mt-4 text-sm">
                  75000 Paris
                </p>

                <p className="mt-4 text-sm">
                  Phone : +451 215 215
                </p>

                <p className="mt-4 text-sm">
                  Fax : +451 215 215
                </p>
              </div>

              {/* LONDON */}
              <div className="flex w-47.5 flex-col">
                <h3 className="text-xl font-bold">
                  London
                </h3>

                <p className="mt-4 text-sm">
                  3517 W. Gray St. Utica,
                </p>

                <p className="mt-4 text-sm">
                  75000 Paris
                </p>

                <p className="mt-4 text-sm">
                  Phone : +451 215 215
                </p>

                <p className="mt-4 text-sm">
                  Fax : +451 215 215
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
 {/* =====================================================
    WORK WITH US
===================================================== */}
<section
  className="
    flex w-full justify-center
    bg-white
    pt-25
  "
>
  <div
    className="
      flex w-full flex-col
      overflow-hidden
      lg:max-w-360
      lg:flex-row
      lg:items-stretch
    "
  >
    {/* ================= LEFT TEXT ================= */}
    <div
      className="
        flex w-full flex-col
        items-start justify-center
        bg-[#2A7CC7]
        px-10 py-20
        text-left text-white
        lg:w-1/2
        lg:px-22.5
        lg:py-0
      "
    >
      <p className="text-sm font-bold">
        WORK WITH US
      </p>

      <h2
        className="
          mt-5
          text-[40px] font-bold
          leading-12.5
        "
      >
        Now Let’s grow Yours
      </h2>

      <p
        className="
          mt-6 max-w-110
          text-sm leading-5
        "
      >
        The gradual accumulation of information about atomic and
        small-scale behavior during the first quarter of the 20th
      </p>

      <button
        type="button"
        className="
          mt-7
          cursor-pointer
          rounded-md
          border border-white
          bg-transparent
          px-10 py-4
          text-sm font-bold
          text-white
        "
      >
        Button
      </button>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    <div
      className="
        flex w-full
        lg:w-1/2
      "
    >
      <img
        src={workWith}
        alt="Work with us"
        className="
          h-full w-full
          object-cover
        "
      />
    </div>
  </div>
</section>
<br /> 
<br />
    </div>
    );
 }
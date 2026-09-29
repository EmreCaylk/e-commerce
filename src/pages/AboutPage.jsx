import asyali from "../assets/asyalı.png";
import aboutUs from "../assets/aboutus.jpg";
import manzara from "../assets/manzara.jpg";

import hooliBrand from "../assets/hooli brand.png";
import lyaBrand from "../assets/lya brand.png";
import yaprakBrand from "../assets/yaprak brand.png";
import stripeBrand from "../assets/stripe brand.png";
import awsBrand from "../assets/aws brand.png";
import androidBrand from "../assets/android brand.png";

import gokhan from "../assets/gokhan.jpg";
import emrecay from "../assets/emrecay.jpg";
import teamMember from "../assets/team-member.jpg";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ================= ABOUT HERO ================= */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-262.5
            flex-col
            items-center
            justify-between
            px-6
            py-16
            lg:h-152.5
            lg:flex-row
            lg:px-0
            lg:py-0
          "
        >

          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              text-center
              lg:w-[50%]
              lg:items-start
              lg:text-left
            "
          >
            <p
              className="
                hidden
                text-[16px]
                font-bold
                leading-6
                text-[#252B42]
                lg:block
              "
            >
              ABOUT COMPANY
            </p>

            <h1
              className="
                mt-0
                text-[40px]
                font-bold
                leading-12.5
                text-[#252B42]
                lg:mt-8.75
                lg:text-[58px]
                lg:leading-20
              "
            >
              ABOUT US
            </h1>

            <p
              className="
                mt-8.75
                max-w-94
                text-[20px]
                font-normal
                leading-7.5
                text-[#737373]
              "
            >
              We know how large objects will act,
              <br className="hidden lg:block" />
              but things on a small scale
            </p>

            <button
              type="button"
              className="
                cursor-pointer
                mt-8.75
                rounded-[5px]
                bg-[#23A6F0]
                px-10
                py-3.75
                text-[14px]
                font-bold
                leading-5.5
                text-white
                transition
                hover:opacity-90
              "
            >
              Get Quote Now
            </button>
          </div>

        

         {/* ================= RIGHT SIDE / IMAGE ================= */}

          <div
            className="
              relative
              mt-15
              flex
              w-full
              items-center
              justify-center
              lg:mt-0
              lg:h-152.5
              lg:w-[50%]
            "
          >
            {/* Büyük pembe yuvarlak */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-85
                w-85
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#FFE9EC]
                lg:h-125
                lg:w-125
              "
            />

            {/* Sol üst pembe yuvarlak */}
            <div
              className="
                absolute
                left-0
                top-[10%]
                h-12.5
                w-12.5
                rounded-full
                bg-[#FFE9EC]
                lg:h-17.5
                lg:w-17.5
              "
            />

            {/* Sol alt mor nokta */}
            <div
              className="
                absolute
                bottom-[20%]
                left-[3%]
                h-2.5
                w-2.5
                rounded-full
                bg-[#9775FA]
              "
            />

            {/* Sağ üst mor nokta */}
            <div
              className="
                absolute
                right-0
                top-[20%]
                h-2.5
                w-2.5
                rounded-full
                bg-[#9775FA]
              "
            />

            {/* Sağ küçük pembe yuvarlak */}
            <div
              className="
                absolute
                right-0
                top-[48%]
                h-7.5
                w-7.5
                rounded-full
                bg-[#FFE9EC]
              "
            />

            {/* Kadın resmi */}
          <img
            src={asyali}
            alt="About Us"
            className="
              relative
              z-10
              h-auto
              w-130
              max-w-none
              object-contain
              lg:w-195
              lg:scale-[1.35]
            "
          />
          </div>
                  </div>
                </section>

  {/* ================= PROBLEMS TRYING ================= */}

        <section className="w-full bg-white">
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-262.5
              flex-col
              gap-10
              px-6
              py-20
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-0
              lg:px-0
              lg:py-22.5
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                w-full
                lg:w-[45%]
              "
            >
              <p
                className="
                  text-[14px]
                  font-normal
                  leading-5
                  text-[#E74040]
                "
              >
                Problems trying
              </p>

              <h2
                className="
                  mt-6
                  max-w-100
                  text-[24px]
                  font-bold
                  leading-8
                  text-[#252B42]
                "
              >
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                w-full
                lg:w-[50%]
              "
            >
              <p
                className="
                  max-w-136.25
                  text-[14px]
                  font-normal
                  leading-5
                  text-[#737373]
                "
              >
                Problems trying to resolve the conflict between the two major realms of
                Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </section>
     {/* ================= STATS ================= */}

<section className="w-full bg-white">
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-262.5
      flex-col
      items-center
      gap-17.5
      px-6
      py-17.5
      lg:flex-row
      lg:justify-between
      lg:gap-0
      lg:px-0
      lg:py-20
    "
  >
    {/* 15K */}
    <div className="flex flex-col items-center text-center">
      <h2
        className="
          text-[58px]
          font-bold
          leading-20
          text-[#252B42]
        "
      >
        15K
      </h2>

      <p
        className="
          text-[16px]
          font-bold
          leading-6
          text-[#737373]
        "
      >
        Happy Customers
      </p>
    </div>

    {/* 150K */}
    <div className="flex flex-col items-center text-center">
      <h2
        className="
          text-[58px]
          font-bold
          leading-20
          text-[#252B42]
        "
      >
        150K
      </h2>

      <p
        className="
          text-[16px]
          font-bold
          leading-6
          text-[#737373]
        "
      >
        Monthly Visitors
      </p>
    </div>

    {/* 15 */}
    <div className="flex flex-col items-center text-center">
      <h2
        className="
          text-[58px]
          font-bold
          leading-20
          text-[#252B42]
        "
      >
        15
      </h2>

      <p
        className="
          text-[16px]
          font-bold
          leading-6
          text-[#737373]
        "
      >
        Countries Worldwide
      </p>
    </div>

    {/* 100+ */}
    <div className="flex flex-col items-center text-center">
      <h2
        className="
          text-[58px]
          font-bold
          leading-20
          text-[#252B42]
        "
      >
        100+
      </h2>

      <p
        className="
          text-[16px]
          font-bold
          leading-6
          text-[#737373]
        "
      >
        Top Partners
      </p>
    </div>
  </div>
</section>

    {/* ================= MEET OUR TEAM ================= */} 
    <section className="w-full bg-white">
      <div className="
      mx-auto
      w-full
      max-w-262.5
      px-6
      py-25
      1g:px-0
      1g:py-[110px]      
      "
      >
        {/* TITLE */}
        <div className="flex flex-col items-center text-center">
          <h2 className="
          text-[40px]
          font-bold
          leading-12.5
          text-[#252B42]
          ">
            Meet Our Team
          </h2>

          <p className="
          mt-2.5
          max-w-117.5
          text-[14px]
          font-normal
          leading-5
          text-[#737373]         
          "
          >
            Problems trying to resolve the conflict between
            <br className="hidden lg:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* TEAM CARDS */}
        <div className="
         mt-17.5
        flex
        flex-col
        items-center
        gap-10
        lg:flex-row
        lg:justify-between
        lg:gap-7.5       
        "
        >
           {/* GÖKHAN */}

           <div className="w-full max-w-79 text-center">
            <img 
            src={gokhan} 
            alt="Gökhan Özdemir"
            className=" 
            h-57.75
            w-full
            object-cover"
            />
              <h3 className="mt-6.25 text-[16px] font-bold text-[#252B42]">
                Gökhan Özdemir
                </h3>

                <p className="mt-2.5 text-[14px] font-bold text-[#737373]">
                  Project Manager
                </p>

                <div className="
                mt-2.5
                flex
                items-center
                justify-center
                gap-5
                text-[20px]
                font-bold
                text-[#23A6F0]                
                "
                >
                 <FaFacebookF size={22} className="bg-[#23A6F0]  gap-5  rounded-full text-white"/>
                  <FaInstagram size={22} />
                  <FaTwitter size={22} />
                </div>
           </div>
           {/* EMRE */}
           <div className="w-full max-w-79 text-center">
            <img 
            src={emrecay}
            alt="Emre Çaylak" 
            className=" 
            h-57.75
            w-full
            object-cover
             object-[center_25%]"
            />
          <h3 className="mt-6.25 text-[16px] font-bold text-[#252B42]">
          Emre Çaylak
          </h3>

          <p className="mt-2.5 text-[14px] font-bold text-[#737373]">
          Full Stack Developer
          </p>

           <div className="
                mt-2.5
                flex
                items-center
                justify-center
                gap-5
                text-[20px]
                font-bold
                text-[#23A6F0]                
                "
                >
                 <FaFacebookF size={22} className="bg-[#23A6F0]  gap-5  rounded-full text-white"/>
                  <FaInstagram size={22} />
                  <FaTwitter size={22} />
                </div>             
           </div>
           {/* TEAM MEMBER */}
           <div className="w-full max-w-79 text-center">
            <img 
            src={teamMember} 
            alt="Team Member" 
            className="
            h-57.75
            w-full
            object-cover"
            />

                <h3 className="mt-6.25 text-[16px] font-bold text-[#252B42]">
          Team Member
        </h3>

        <p className="mt-2.5 text-[14px] font-bold text-[#737373]">
          Full Stack Developer
        </p>

                <div className="
                mt-2.5
                flex
                items-center
                justify-center
                gap-5
                text-[20px]
                font-bold
                text-[#23A6F0]                
                "
                >
                 <FaFacebookF size={22} className="bg-[#23A6F0]  gap-5  rounded-full text-white"/>
                  <FaInstagram size={22} />
                  <FaTwitter size={22} />
                </div>                       
           </div>
        </div>
      </div>
    </section>

    {/* ================= BIG COMPANIES ================= */}

    <section className="w-full bg-[#FAFAFA]">
      <div className="
      mx-auto
      flex
      w-fullmax-w-[1050px]
      flex-col
      items-center
      px-6
      py-20
      1g:px-0
      1g:py-[100px]      
      "
      >
      {/* TITLE */}
      <div className="flex flex-col items-center text-center">
        <h2
        className="
        text-[40px]
        font-bold
        leading-12.5
        text-[#252B42]       
        "
        >
          Big Companies Are Here
        </h2>

        <p className="
        mt-2.5
          max-w-117.5
          text-[14px]
          leading-5
          text-[#737373]"> 
          Problems trying to resolve the conflict between
        <br className="hidden lg:block" />
        the two major realms of Classical physics: Newtonian mechanics
        </p>
         {/* ================= BRANDS ================= */}
         <div className="
         mt-15
          flex
          w-full
          flex-col
          items-center
          justify-center
          gap-13.75

          md:flex-row
          md:flex-wrap

          lg:flex-nowrap
          lg:justify-center
          lg:gap-8.75     
         "
         >
          {/* HOOLI */}
          <img 
          src={hooliBrand} 
          alt="Hooli" 
          className="h-12.5 w-26.25 object-contain"
          />

          <img 
          src={lyaBrand} 
          alt="LYA" 
          className="h-15 w-21.25 object-contain"
          />

          <img 
          src={yaprakBrand}
          alt="Brand" 
          className="h-15 w-26.25 object-contain"
          />

          <img 
          src={stripeBrand} 
          alt="Stripe" 
          className="h-12.5 w-26.25 object-contain"
          />

          <img 
          src={awsBrand} 
          alt="AWS" 
          className="h-15 w-26.25 object-contain"
          />

          <img 
          src={androidBrand} 
          alt="Android" 
          className="h-15 w-26.25 object-contain"
          />
         </div>
      </div>
      </div>    
    </section>

     {/* ================= VIDEO / MANZARA ================= */}

<section className="w-full bg-white">
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-262.5
      items-center
      justify-center
      px-6
      py-28
      lg:px-0
    "
  >
    <div
      className="
        relative
        w-full
        max-w-247.25
        overflow-hidden
        rounded-[20px]
        lg:h-135
      "
    >
      {/* MANZARA IMAGE */}
      <img
        src={manzara}
        alt="Landscape"
        className="
          h-80
          w-full
          object-cover
          lg:h-135
          lg:w-247.25
        "
      />

      {/* PLAY BUTTON */}
      <button
        type="button"
        aria-label="Play video"
        className="
          absolute
          left-1/2
          top-1/2
          flex
          cursor-pointer
          h-17.5
          w-17.5
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#23A6F0]
          lg:h-22.5
          lg:w-22.5
        "
      >
        {/* PLAY TRIANGLE */}
        <span
          className="
            ml-1.25
            h-0
            w-0
            border-b-13
            border-l-20
            border-t-13
            border-b-transparent
            border-l-white
            border-t-transparent
          "
        />
      </button>
    </div>
  </div>
</section>
     {/* ================= WORK WITH US ================= */}

<section className="w-full bg-white py-15">
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-300
      flex-col
      overflow-hidden
      lg:h-159
      lg:flex-row
    "
  >
    {/* LEFT - BLUE AREA */}
    <div
      className="
        flex
        w-full
        items-center
        justify-center
        bg-[#2A7CC7]
        px-8
        py-20

        lg:h-159
        lg:w-157.5
        lg:shrink-0
        lg:px-0
        lg:py-0
      "
    >
      <div className="w-full max-w-107.5">
        <p
          className="
            text-[16px]
            font-bold
            leading-6
            text-white
          "
        >
          WORK WITH US
        </p>

        <h2
          className="
            mt-6
            text-[40px]
            font-bold
            leading-12.5
            text-white
          "
        >
          Now Let&apos;s grow Yours
        </h2>

        <p
          className="
            mt-6
            max-w-110
            text-[14px]
            leading-5
            text-white
          "
        >
          The gradual accumulation of information about atomic and
          small-scale behavior during the first quarter of the 20th
        </p>

        <button
          type="button"
          className="
            mt-6
            rounded-[5px]
            border
            border-white
            px-10
            py-3.75
            text-[14px]
            font-bold
            text-white
          "
        >
          Button
        </button>
      </div>
    </div>

    {/* RIGHT - IMAGE */}
    <div
      className="
        h-112.5
        w-full
        overflow-hidden

        lg:h-159
        lg:w-150
        lg:shrink-0
      "
    >
      <img
        src={aboutUs}
        alt="Work With Us"
        className="
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </div>
  </div>
</section>
    </div>
  );
}
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import gokhan from "../assets/gokhan.jpg";
import emrecay from "../assets/emrecay.jpg";
import teamMember from "../assets/team-member.jpg";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: gokhan,
    },
    {
      id: 2,
      name: "Emre Çaylak",
      role: "Full Stack Developer",
      image: emrecay,
    },
    {
      id: 3,
      name: "Team Member",
      role: "Full Stack Developer",
      image: teamMember,
    },
  ];

  return (
    <div className="flex w-full flex-col bg-white">
      {/* ================= TEAM SECTION ================= */}
      <section className="flex w-full justify-center bg-white">
        <div
          className="
            flex w-full flex-col
            items-center
            px-6 py-20
            lg:h-204.75
            lg:max-w-262.5
            lg:px-0
            lg:py-28
          "
        >
          {/* ================= TITLE ================= */}
          <div className="flex flex-col items-center text-center">
            <h1
              className="
                text-[40px] font-bold
                leading-12.5
                text-[#252B42]
              "
            >
              Meet Our Team
            </h1>

            <p
              className="
                mt-3 max-w-117.5
                text-sm leading-5
                text-[#737373]
              "
            >
              Problems trying to resolve the conflict between the two
              major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* ================= TEAM MEMBERS ================= */}
          <div
            className="
              mt-16 flex w-full
              flex-col
              items-center
              gap-12
              lg:mt-28
              lg:flex-row
              lg:items-start
              lg:justify-between
              lg:gap-7.5
            "
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="
                  flex w-full
                  max-w-79
                  flex-col
                  items-center
                  bg-white
                  text-center
                  lg:w-79
                "
              >
                {/* ================= IMAGE ================= */}
                <div
                  className="
                    h-57.75 w-full
                    overflow-hidden
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`h-full w-full object-cover ${
                        member.name === "Emre Çaylak"
                        ? "object-[center_25%]"
                        : "object-center"
                    }`}
                  />
                </div>

                {/* ================= MEMBER INFO ================= */}
                <div
                  className="
                    flex w-full flex-col
                    items-center
                    px-4 py-7
                  "
                >
                  <h3
                    className="
                      text-base font-bold
                      text-[#252B42]
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm font-bold
                      text-[#737373]
                    "
                  >
                    {member.role}
                  </p>

                  {/* ================= SOCIAL MEDIA ================= */}
                  <div
                    className="
                      mt-4 flex
                      items-center justify-center
                      gap-5
                    "
                  >
                    <a
                      href="#"
                      aria-label={`${member.name} Facebook`}
                      className="
                        flex h-6 w-6
                        items-center justify-center
                        text-[#23A6F0]
                      "
                    >
                      <FaFacebookF size={20} />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} Instagram`}
                      className="
                        flex h-6 w-6
                        items-center justify-center
                        text-[#23A6F0]
                      "
                    >
                      <FaInstagram size={20} />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} Twitter`}
                      className="
                        flex h-6 w-6
                        items-center justify-center
                        text-[#23A6F0]
                      "
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
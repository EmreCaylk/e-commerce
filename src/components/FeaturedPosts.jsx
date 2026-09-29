import new1 from "../assets/new 1.jpg";
import new2 from "../assets/new 2.jpg";
import new3 from "../assets/new 3.jpg";

export default function FeaturedPosts() {
  const posts = [
    { id: 1, image: new1 },
    { id: 2, image: new2 },
    { id: 3, image: new3 },
  ];

  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-20">

      {/* SECTION TITLE */}
      <div className="flex w-full flex-col items-center text-center">
        <p className="text-sm font-bold text-[#23A6F0]">
          Practice Advice
        </p>

        <h2 className="mt-2 text-[40px] font-bold leading-tight text-[#252B42]">
          Featured Posts
        </h2>

        <p className="mt-3 max-w-117.5 text-sm leading-5 text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* POST CARDS */}
      <div
        className="
            mt-20 flex w-full flex-col
            items-center justify-center gap-2.5
            md:flex-row md:flex-wrap
        "
        >
        {posts.map((post) => (
          <article
            key={post.id}
            className="
              flex h-151.5 w-82.25 shrink-0
              flex-col bg-white shadow-md
            "
          >
            {/* IMAGE */}
            <div className="relative h-75 w-full shrink-0">
              <img
                src={post.image}
                alt="Featured Post"
                className="h-full w-full object-cover"
              />

              {/* NEW BADGE */}
              <span
                className="
                  absolute left-5 top-5
                  rounded bg-[#E74040]
                  px-3 py-1 text-sm font-bold text-white
                "
              >
                NEW
              </span>
            </div>

            {/* CARD CONTENT */}
            <div className="flex flex-1 flex-col p-6">

              {/* TAGS */}
              <div className="flex items-center gap-4 text-xs">
                <span className="text-[#8EC2F2]">
                  Google
                </span>

                <span className="text-[#737373]">
                  Trending
                </span>

                <span className="text-[#737373]">
                  New
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-3 text-xl leading-7 text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-5 text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>

              {/* DATE + COMMENTS */}
              <div className="mt-5 flex items-center justify-between text-xs text-[#737373]">
                <span>
                  22 April 2021
                </span>

                <span>
                  10 comments
                </span>
              </div>

              {/* LEARN MORE */}
              <button
                type="button"
                className="
                  mt-5 flex cursor-pointer items-center
                  self-start text-sm font-bold text-[#737373]
                "
              >
                Learn More

                <span className="ml-2 text-xl text-[#23A6F0]">
                  ›
                </span>
              </button>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
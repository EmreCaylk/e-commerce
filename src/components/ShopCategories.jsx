import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShopCategories() {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex max-w-295 gap-4 px-6 py-6">

        {topCategories.map((category) => {
          const gender =
            category.gender === "k" ? "kadin" : "erkek";

          const categoryName =
            category.code.split(":")[1];

          return (
            <Link
              key={category.id}
              to={`/shop/${gender}/${categoryName}/${category.id}`}
              className="group relative h-75 flex-1 overflow-hidden"
            >
              <img
                src={category.img}
                alt={category.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-[16px] font-bold uppercase">
                  {category.title}
                </h3>

                <span className="mt-2 text-[14px] font-bold">
                  ⭐ {category.rating}
                </span>
              </div>
            </Link>
          );
        })}

      </div>
    </section>
  );
}
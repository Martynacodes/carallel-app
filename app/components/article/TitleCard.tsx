import Link from "next/link";
import Image from "next/image";
import { articles } from "@/app/mockData";

const TitleCard: React.FC = () => {
  const article = articles.find((article) => article.id === 1);

  const backgroundColors = [
    "bg-sky-200",
    "bg-violet-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-rose-200",
    "bg-fuchsia-200",
  ];
  const randomBgColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <div className="group flex flex-row justify-between items-end rounded-3xl shadow-lg bg-yellow-100 p-0 m-4 md:max-w-xl ml-0">
      <Image
        className="aspect-[4/3] object-cover group-hover:scale-105 transition-all ease duration-300"
        src={"/images/moon.png"}
        alt="Article's title image"
        width={150}
        height={150}
        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-row justify-start p-6">
        <h2 className="font-playfair font-semibold text-base sm:text-3xl mx-4">
          <span
            className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
          dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
          >
            {"We're all caregivers"}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default TitleCard;

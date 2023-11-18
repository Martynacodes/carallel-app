import Link from "next/link";
import Image from "next/image";
import { articles } from "@/app/mockData";

// type Article = {
//   id: number;
//   title: string;
//   subtitle: string;
//   category: string;
//   url: string;
// };

// type ArticleCardProps = {
//   article: Article;
// };

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
    <div className="group flex flex-row justify-between items-end rounded-3xl shadow-lg bg-lime-100 p-4 m-4 md:max-w-xl">
      <Image
        className="aspect-[4/3] object-cover group-hover:scale-105 transition-all ease duration-300"
        src={"/images/moon.png"}
        alt="Article's title image"
        width={150}
        height={150}
        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-row justify-start p-6">
        <h2 className="font-semibold capitalize text-base sm:text-lg mx-4">
          <span
            className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
          dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
          >
            Article title
          </span>
        </h2>
      </div>
    </div>
  );
};

export default TitleCard;

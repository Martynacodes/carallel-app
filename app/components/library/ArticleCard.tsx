import Link from "next/link";
import Image from "next/image";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  url: string;
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
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
    <div className="group flex flex-col items-center text-dark dark:text-light shadow-lg">
      <Link href={article.url} className="h-full rounded-t-xl overflow-hidden">
        <Image
          src={"/images/moon.png"}
          alt={article.title}
          width={100}
          height={100}
          className={`${randomBgColor} aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300`}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full bg-white rounded-b-xl ">
        <Link
          href={article.url}
          className="inline-block my-1 mt-3  items-center justify-center"
        >
          <h2 className="font-semibold capitalize text-base sm:text-lg mx-4">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
          dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {article.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;

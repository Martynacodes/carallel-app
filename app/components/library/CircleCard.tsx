import Link from "next/link";
import Image from "next/image";

type FamilySectionOptions = {
  id: number;
  title: string;
};

type FamilySectionOptionsProps = {
  familySectionOptions: FamilySectionOptions;
};

const CircleCard = ({ familySectionOptions }: FamilySectionOptionsProps) => {
  const backgroundColors = [
    "bg-sky-200",
    "bg-violet-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-rose-200",
    "bg-fuchsia-200",
    "bg-cyan-200",
    "bg-lime-200",
    "bg-emerald-200",
  ];
  const randomBgColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <div className="group flex flex-col items-center text-dark dark:text-light rounded-full">
      <Link href={"/"} className="h-full rounded-t-xl overflow-hidden">
        <Image
          src={"/images/moon.png"}
          alt={familySectionOptions.title}
          width={60}
          height={60}
          className={`${randomBgColor} rounded-full w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300`}
          sizes="(max-width: 640px) 50vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <Link
          href={"/"}
          className="inline-block my-1 items-center justify-center"
        >
          <h2 className="whitespace-normal font-sans text-center sm:text-base  mx-4 line-clamp-2 p-1">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
          dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {familySectionOptions.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default CircleCard;

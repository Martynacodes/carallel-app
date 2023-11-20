import Image from "next/image";
import Link from "next/link";
import { additionalResources } from "@/app/mockData";

type AdditionalResources = {
  id: number;
  title: string;
};

type AdditionalResourceProps = {
  AdditionalResources: AdditionalResources;
};
const ResourcesCard = ({ AdditionalResources }: AdditionalResourceProps) => {
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
    "bg-teal-200",
    "bg-lightBlue-200",
    "bg-purple-200",
    "bg-trueGray-200",
  ];
  const randomBgColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <div className="relative flex w-full  flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md">
      <Link href={"/"} className="rounded-t-xl overflow-hidden p-4">
        <Image
          src={"/images/moon.png"}
          alt="Additional Resources"
          width={100}
          height={100}
          className={`${randomBgColor} rounded-full aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300`}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-6">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {}
        </h4>

        <a className="inline-block" href="#">
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResourcesCard;

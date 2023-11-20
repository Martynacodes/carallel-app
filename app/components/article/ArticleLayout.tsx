import Container from "../reusable/Container";
import TitleCard from "./TitleCard";
import BookmarkButton from "./BookmarkButton";
import VideoCard from "./VideoCard";
import AudioCard from "./AudioCard";
import ContentCategoryButton from "./ContentCategoryButton";
import ThumbsUpDown from "./ThumbsUpDown";
import RelatedResources from "./RelatedResources";
import Navbar from "../navbar/Navbar";
// import { Content } from "next/font/google";

const ArticleLayout = () => {
  return (
    <div className="mb-4 px-4 text-center">
      <TitleCard />
      <BookmarkButton />
      <h2 className="font-playfair  text-left text-3xl xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
        <span
          className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50
              dark:to-accentDark/50 bg-[length:0px_6px] 
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
        >
          New to caregiving? Take it one step at a time
        </span>
      </h2>
      <div className="font-sans  text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4 ">
        <p className="font-sans text-justify">
          My father died many years ago. I have two sisters who live out of
          state, but I am the only one of us who lives close to Mom. I love my
          mom and always expected that I would help her out as she got older.
        </p>
      </div>
      <VideoCard />
      <h3 className="mb-4 font-playfair text-left text-xl xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
        <span
          className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50
              dark:to-accentDark/50 bg-[length:0px_6px] 
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
        >
          You are a caregiver
        </span>
      </h3>
      <AudioCard />
      <div className="font-sans  text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4 ">
        <p className="font-sans text-justify mb-2">
          During the past year, her health has really declined, so I’ve needed
          to put more time into caring for her, and now I’m helping out with
          almost everything – shopping, daily care, bills, doctor appointments.
        </p>
        <p className="font-sans text-justify mb-2">
          I grocery shop, cook, and keep the house clean. I take her to all of
          her doctor appointments too. As she has become more frail, I have to
          help her take baths and make sure she has clean clothes. Just recently
          I realized she wasn’t taking all of her medications, so now I put
          together pillboxes for her and make sure she’s taking what she needs.
        </p>
      </div>
      <ContentCategoryButton />
      <ThumbsUpDown />
      <RelatedResources />
    </div>
  );
};

export default ArticleLayout;

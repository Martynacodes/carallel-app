import { GoThumbsdown } from "react-icons/go";
import { GoThumbsup } from "react-icons/go";

const ThumbsUpDown = () => {
  return (
    <div className="flex space-x-4 my-4">
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
        <GoThumbsup />
      </div>
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
        <GoThumbsdown />
      </div>
    </div>
  );
};

export default ThumbsUpDown;

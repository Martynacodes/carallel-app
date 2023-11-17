// components/CategoriesFilter.tsx
import { FC, Dispatch, SetStateAction } from "react";

type CategoriesFilterProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const CategoriesFilter: FC<CategoriesFilterProps> = ({
  category,
  setCategory,
}) => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        All
      </button>
      <button>Shared</button>
      <button>Bookmarks</button>
      <button>Read</button>
    </div>
  );
};

export default CategoriesFilter;

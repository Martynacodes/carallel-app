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
      <button>All</button>
      <button>Shared</button>
      <button>Bookmarks</button>
      <button>Read</button>
    </div>
  );
};

export default CategoriesFilter;

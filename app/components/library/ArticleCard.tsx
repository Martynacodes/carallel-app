// app/components/ArticleCard.tsx
import { FC } from "react";
import Link from "next/link";

type ArticleCardProps = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
};

const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  subtitle,
  content,
  category,
}) => (
  <div key={id}>
    <Link href={`/article?id=${id}`}>
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h6>{category}</h6>
        <p>{content}</p>
      </div>
    </Link>
  </div>
);

export default ArticleCard;

// const ArticleCard = () => {
//   return <h3>Article Card</h3>;
// };

// export default ArticleCard;

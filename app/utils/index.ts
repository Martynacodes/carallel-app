type Article = {
  id: number;
  url: string;
  image: {
    filePath: string;
    blurhashDataUrl: string;
    width: number;
    height: number;
  };
  title: string;
  tags: string[];
};

export const sortArticles = (articles: Article[]): Article[] => {
  return articles.slice().sort((a, b) => b.id - a.id);
};

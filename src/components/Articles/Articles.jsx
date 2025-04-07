import ArticleCard from "@/components/Articles/ArticleCard.jsx";
import "@/components/Articles/Articles.jsx";

export default function Articles() {
  const articles = [
    {
      date: "April 7, 2025",
      title: "Thoughts on AI",
      content:
        "AI is an amazing tool and should be utlized as a tool, not as something to replace thinking. If we lose our ability to reason and to think out the how and why. We become a much less effective version of an AI." ,
    },
    {
      date: "April 7, 2025",
      title: "Technology and the future. ",
      content:
        "Coding now is like looking into the future. I say that because when you code if you are being smart about it in most situations you should be thinking about how accescible your code is to being updated when the new tools and advances come out. If you do not then your code will eventually become reduntant.  ",
    },
  
  ];

  return (
    <div className="articles-container flex-1 space-y-8">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          date={article.date}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
}

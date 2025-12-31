import { useEffect, useState } from "react";
import api from "../api";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/articles")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-300">
        Loading articles...
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          BeyondChats Articles
        </h1>
        <p className="mt-3 text-gray-300 text-sm md:text-base">
          Original and AI-enhanced blog articles
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

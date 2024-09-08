import { useState, useEffect } from 'react';
import { Article } from '../types';

interface ArticleResponse {
  articles: Article;
  linkedArticles: Article[];
}

export const useArticleData = (articleId: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [linkedArticles, setLinkedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('https://cluster.tarajiplus.com/api/show-article', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Host': 'cluster.tarajiplus.com',
            'source': 'app_taraji',
            'lang': 'fr',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'User-Agent': 'TarajiPlus/2.5 (com.tarajiplus.tn; build:1; iOS 17.4.1) Alamofire/5.5.0',
            'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jbHVzdGVyLnRhcmFqaXBsdXMuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5Nzc0OTMyLCJuYmYiOjE2NTk3NzQ5MzIsImp0aSI6InFjb1pnVTZmWTdpNEtIMHQiLCJzdWIiOjQ0NjA3MywicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.sYJUuxNnfUgEDx14ztPiJfWwJ0tinTTp3q5rBwBmQsI',
            'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
            'Accept-Language': 'en-CA;q=1.0, ar-CA;q=0.9, fr-CA;q=0.8, es-CA;q=0.7'
          },
          body: JSON.stringify({
            article_id: parseInt(articleId),
            customer_technology: "2",
            customer_uidd: "33325CEB-B541-4D25-9D89-0A76D9BDB827|iPhone 11",
            customer_app_version: "1.0"
          })
        });
        const result = await response.json();
        if (result.success) {
          const data: ArticleResponse = result.data;
          setArticle(data.articles);
          setLinkedArticles(data.linkedArticles);
        } else {
          setError(result.error_message);
        }
      } catch (err) {
        setError('An error occurred while fetching the article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  return { article, linkedArticles, loading, error };
};

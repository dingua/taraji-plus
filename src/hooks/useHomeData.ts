import { useState, useEffect, useCallback } from 'react';
import { HomeData, Article, NextMatch } from '../types';

interface UseHomeDataResult {
  articles: Article[];
  nextMatch: NextMatch | null;
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
  fetchNextPage: () => void;
}

export const useHomeData = (competitionTypeId: number = 0): UseHomeDataResult => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [nextMatch, setNextMatch] = useState<NextMatch | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const url = `https://cluster.tarajiplus.com/api/articles?page=${page}${competitionTypeId ? `&competition_type_id=${competitionTypeId}` : ''}`;
      const response = await fetch(url, {
        headers: {
          'Host': 'cluster.tarajiplus.com',
          'source': 'app_taraji',
          'lang': 'fr',
          'Connection': 'keep-alive',
          'Accept': 'application/json',
          'User-Agent': 'TarajiPlus/2.5 (com.tarajiplus.tn; build:1; iOS 17.4.1) Alamofire/5.5.0',
          'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jbHVzdGVyLnRhcmFqaXBsdXMuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5Nzc0OTMyLCJuYmYiOjE2NTk3NzQ5MzIsImp0aSI6InFjb1pnVTZmWTdpNEtIMHQiLCJzdWIiOjQ0NjA3MywicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.sYJUuxNnfUgEDx14ztPiJfWwJ0tinTTp3q5rBwBmQsI',
          'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
          'Accept-Language': 'en-CA;q=1.0, ar-CA;q=0.9, fr-CA;q=0.8, es-CA;q=0.7'
        }
      });
      const result = await response.json();
      if (result.success) {
        const data: HomeData = result.data;
        setArticles(prevArticles => page === 1 ? data.articles : [...prevArticles, ...data.articles]);
        setNextMatch(data.nextMatch);
        setTotalPages(data.totalPages);
        setCurrentPage(page);
      } else {
        setError(result.error_message || 'An error occurred while fetching data');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  }, [competitionTypeId]);

  useEffect(() => {
    setArticles([]);
    setCurrentPage(1);
    fetchData(1);
  }, [competitionTypeId, fetchData]);

  const fetchNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      fetchData(currentPage + 1);
    }
  }, [currentPage, totalPages, fetchData]);

  return { articles, nextMatch, totalPages, currentPage, loading, error, fetchNextPage };
};

import { useState, useEffect } from 'react';
import { HomeData } from '../types';

export const useHomeData = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = new Headers({
          'Host': 'cluster.tarajiplus.com',
          'source': 'app_taraji',
          'lang': 'fr',
          'Connection': 'keep-alive',
          'Accept': 'application/json',
          'User-Agent': 'TarajiPlus/2.5 (com.tarajiplus.tn; build:1; iOS 17.4.1) Alamofire/5.5.0',
          'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jbHVzdGVyLnRhcmFqaXBsdXMuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5Nzc0OTMyLCJuYmYiOjE2NTk3NzQ5MzIsImp0aSI6InFjb1pnVTZmWTdpNEtIMHQiLCJzdWIiOjQ0NjA3MywicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.sYJUuxNnfUgEDx14ztPiJfWwJ0tinTTp3q5rBwBmQsI',
          'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
          'Accept-Language': 'en-CA;q=1.0, ar-CA;q=0.9, fr-CA;q=0.8, es-CA;q=0.7'
        });

        const response = await fetch('https://cluster.tarajiplus.com/api/articles?page=1', {
          method: 'GET',
          headers: headers
        });

        const result = await response.json();
        if (result.success) {
          setData(result.data);
        } else {
          setError(result.error_message);
        }
      } catch (err) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { NewsApiResponse } from "../types";

export const useNews = (page: number) => {
  const [data, setData] = useState<NewsApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get<NewsApiResponse>("/api/news", {
          params: {
            page,
          },
        });
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (
            error.response &&
            error.response.data &&
            typeof error.response.data === "object"
          ) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        } else if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNewsApi();
  }, [page]);

  return { data, error, loading };
};

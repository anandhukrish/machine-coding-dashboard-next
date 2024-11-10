import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

export const useNews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get("");
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

  return { data, error, loading, fetchNewsApi };
};

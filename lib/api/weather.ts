import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    abortController.current = new AbortController();
    const fetchWeatherApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get("", {
          signal: abortController.current?.signal,
        });
        setData(result.data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherApi();
    return () => abortController.current?.abort();
  }, []);

  return { data, error, loading };
};

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { log } from "console";
import { WeatherApi } from "../types";

interface ErrorType {
  code: string;
  message: string;
}

export const useWeather = () => {
  const [data, setData] = useState<WeatherApi | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherApi = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get<WeatherApi>(
        process.env.NEXT_PUBLIC_WEATHER_BASE_URL,
        {
          params: {
            q: city,
            appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
          },
        }
      );
      setData(result.data);
    } catch (error: unknown) {
      console.log(error, error instanceof AxiosError);
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          typeof error.response.data === "object"
        ) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      }
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchWeatherApi };
};

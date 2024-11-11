"use client";

import { WeatherApi } from "./../types";
import { useState } from "react";
import { AxiosError } from "axios";
import { weatherApi } from "../axios";

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
      const result = await weatherApi.get<WeatherApi>("/weather", {
        params: {
          q: city,
        },
      });
      setData(result.data);
    } catch (error: unknown) {
      setData(null);
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          typeof error.response.data === "object"
        ) {
          setError("City not found. Please check the spelling and try again.");
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

  return { data, error, loading, fetchWeatherApi };
};

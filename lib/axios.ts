import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    units: "metric",
  },
});

export const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    country: "us",
    sortBy: "publishedAt",
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    pageSize: 10,
  },
});

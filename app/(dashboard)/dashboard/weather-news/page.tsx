import NewsSection from "@/components/news/news-section";
import WeatherSection from "@/components/weather/weather-section";
import React from "react";

const WeatherNews = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg md:text-4xl text-center mb-6 font-extrabold">
        Master Ji Live Dashboards
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <WeatherSection />
        <NewsSection />
      </div>
    </div>
  );
};

export default WeatherNews;

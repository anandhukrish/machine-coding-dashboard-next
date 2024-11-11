"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card } from "../ui/card";
import Input from "../ui/input";
import { useWeather } from "@/lib/api/weather";
import { Loader2 } from "lucide-react";
import { timestampToTime } from "@/lib/utils";
import { Alert, AlertDescription } from "../ui/alert";

const WeatherSection = () => {
  const [search, setSearch] = useState<string | null>(null);

  const { data, error, fetchWeatherApi, loading } = useWeather();

  //handling serch value
  const handleSearch = () => {
    if (!search || search === "") {
      return;
    }
    fetchWeatherApi(search);
  };

  return (
    <Card className="p-6 w-full md:w-[33%] rounded-md">
      <h1 className="text-2xl font-bold mb-5">{`How's is the weather Today?`}</h1>
      <div className="flex gap-2 items-center">
        <Input
          type="text"
          placeholder="Enter your city name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="h-10" onClick={handleSearch}>
          Get Weather
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center h-[80%]">
          <Loader2 className="animate-spin size-8" />
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {data && (
        <Card className="text-center mt-5 p-3 pt-10">
          <h1 className=" text-2xl font-bold">{data.name}</h1>
          <h3 className="text-xl text-slate-500/80 mt-2">
            l{data.weather[0].description}
          </h3>
          <div className="mt-3 mb-1">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt="weather-icon"
              className="block mx-auto size-28"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Card className="p-3 h-24">
              <h3 className="font-extrabold  text-2xl">{data.main.temp}°</h3>
              <p className="leading-[1.2] text-gray-600/80 text-base">
                {" "}
                Current Temparature
              </p>
            </Card>
            <Card className="p-3 h-24">
              <h3 className="font-extrabold  text-2xl">
                {data.main.feels_like}°
              </h3>
              <p className="leading-[1.2] text-gray-600/80 text-base">
                Feels Like
              </p>
            </Card>
            <Card className="p-3 h-24">
              <h3 className="font-extrabold  text-2xl">
                {data.main.humidity}%
              </h3>
              <p className="leading-[1.2] text-gray-600/80 text-base">
                Humidity
              </p>
            </Card>
            <Card className="p-3 h-24">
              <h3 className="font-extrabold  text-2xl">{data.wind.speed}m/s</h3>
              <p className="leading-[1.2] text-gray-600/80 text-base">
                Wind Speed
              </p>
            </Card>
          </div>
          <div>
            <h1 className="mt-8">
              <span className="font-bold">Sunrise : </span>
              <span>{timestampToTime(data.sys.sunrise)}</span>
            </h1>
            <h1 className="mt-1">
              <span className="font-bold">
                Sunset : <span> {timestampToTime(data.sys.sunrise)}</span>
              </span>
            </h1>
          </div>
        </Card>
      )}
    </Card>
  );
};

export default WeatherSection;

"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Card } from "../ui/card";
import Input from "../ui/input";
import { useWeather } from "@/lib/api/weather";
import { log } from "console";

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
  console.log(data, error);

  return (
    <Card className="p-6 w-[33%] rounded-md">
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
          <div className="border-4 border-black/20 border-b-black size-9 rounded-full animate-spin"></div>
        </div>
      )}

      {error && <div>{error}</div>}

      {data && (
        <Card className="text-center mt-5 p-5 pt-10">
          <h1 className=" text-2xl font-bold">{error}</h1>
          <h3 className="text-xl text-slate-500/80 mt-2">light rain</h3>
          <div className="mt-7">
            <img
              src="https://openweathermap.org/img/wn/10d@4x.png"
              alt="weather-icon"
              className="block mx-auto size-28"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Card>
              <h3>temp</h3>
              <p>30</p>
            </Card>
            <Card>
              <h3>temp</h3>
              <p>30</p>
            </Card>
            <Card>
              <h3>temp</h3>
              <p>30</p>
            </Card>
            <Card>
              <h3>temp</h3>
              <p>30</p>
            </Card>
          </div>
          <div>
            <h1>
              <span className="font-bold">Sunrise:</span> <span>122</span>
            </h1>
            <h1>
              <span className="font-bold"> Sunset:</span>
              <span>111</span>
            </h1>
          </div>
        </Card>
      )}
    </Card>
  );
};

export default WeatherSection;

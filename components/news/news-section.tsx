import React from "react";
import { Card } from "../ui/card";
import NewsCard from "./news-card";
import { Button } from "../ui/button";

const NewsSection = () => {
  return (
    <Card className="flex-1 p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          {"what,s happening around the world?"}
        </h1>
        <div className="flex items-center gap-3 ">
          <div>listiocn</div>
          <input type="checkbox" name="" id="" />
          <div>listiocn</div>
        </div>
      </div>
      <div className="h-[calc(100vh_-_330px)] overflow-y-scroll">
        <div className="grid grid-cols-2 gap-3">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className="flex justify-between pt-5">
        <Button variant="secondary">Previous Page</Button>
        <Button>Next Page</Button>
      </div>
    </Card>
  );
};

export default NewsSection;

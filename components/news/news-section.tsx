"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import NewsCard from "./news-card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";
import { useNews } from "@/lib/api/news";
import SkeletonNewsCard from "./skeleton-news-card";
import { Alert, AlertDescription } from "../ui/alert";
import { Grid, List } from "lucide-react";

const NewsSection = () => {
  const [page, setPage] = useState(1);
  const [showGrid, setShowGrid] = useState(true);

  const { data: news, loading, error } = useNews(page);

  const totalPages =
    news && news.totalResults && Math.ceil(news?.totalResults / 10);

  const articles =
    news &&
    news.articles &&
    news.articles.filter((article) => article.title !== "[Removed]");

  const handleGridListView = (checked: boolean) => {
    setShowGrid(checked);
  };

  return (
    <Card className="flex-1 p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          {"what's happening around the world?"}
        </h1>
        <div className="hidden md:flex items-center gap-3  ">
          <div className="flex items-center gap-2">
            <List />
            List View
          </div>
          <Switch checked={showGrid} onCheckedChange={handleGridListView} />
          <div className="flex items-center gap-2">
            <Grid />
            Grid View
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh_-_300px)] overflow-y-scroll">
        {error && (
          <div className="gird place-content-center h-full">
            <Alert
              variant="destructive"
              className="mt-8  w-full md:w-[30rem] mx-auto text-center"
            >
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        )}
        {articles && articles.length === 0 && (
          <Alert
            variant="default"
            className="mt-8 mx-auto  w-full md:w-[30rem]"
          >
            <AlertDescription>No articles found</AlertDescription>
          </Alert>
        )}
        <div
          className={cn(
            "grid gap-3",
            showGrid ? " grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          )}
        >
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <SkeletonNewsCard key={i} />
            ))}

          {articles &&
            articles.length > 0 &&
            articles.map((article, i) => (
              <NewsCard {...article} key={`${article.title}-${i}`} />
            ))}
        </div>
      </div>
      <div className="flex justify-between pt-5">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous Page
        </Button>
        <Button
          disabled={totalPages === page}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </Button>
      </div>
    </Card>
  );
};

export default NewsSection;

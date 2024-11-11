import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Articles } from "@/lib/types";
import { timestampToDate } from "@/lib/utils";

const NewsCard = ({
  urlToImage,
  url,
  title,
  description,
  author,
  publishedAt,
}: Articles) => {
  const [splitDesc, setSplitDesc] = useState(true);

  return (
    <Card className="overflow-hidden p-5 ">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title && ""}
          className="w-full h-[9.5rem] object-cover rounded-md object-top"
        />
      )}
      <CardContent className="px-0 py-5">
        <CardTitle className="text-lg">{title}</CardTitle>
        <span className="text-xs text-slate-500/80">
          By ${author} - {timestampToDate(publishedAt)}
        </span>
        <CardDescription className="text-sm text-black font-medium">
          {description && splitDesc ? description.slice(0, 80) : description}
        </CardDescription>
        <Button
          variant="link"
          className=" text-xs font-semibold capitalize pl-0 text-bold text-blue-600/80"
          onClick={() => setSplitDesc((prev) => !prev)}
        >
          {description && splitDesc
            ? description.length > 80
              ? "Read More"
              : ""
            : "Read Less"}
        </Button>
        <div className="text-center">
          <Button
            variant="link"
            asChild
            className="text-blue-600/80 capitalize text-base font-semibold"
          >
            <a href={url} target="_blank">
              View Full Article
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

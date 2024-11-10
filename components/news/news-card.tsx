import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const NewsCard = () => {
  return (
    <Card className="overflow-hidden p-5 ">
      <Image
        src="/favicon.ico"
        alt=""
        width="100"
        height="180"
        className="!w-full !h-36 object-cover rounded-md"
      ></Image>
      <CardContent className="px-0 py-5">
        <CardTitle className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          temporibus?
        </CardTitle>
        <span className="text-xs text-slate-500/80">By blaa date</span>
        <CardDescription className="text-base text-black font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
        <Button
          variant="link"
          className=" text-sm font-semibold capitalize pl-0 text-bold text-blue-600/80"
        >
          Read More
        </Button>
        <div className="text-center">
          <Button
            variant="link"
            asChild
            className="text-blue-600/80 capitalize text-base font-semibold"
          >
            <Link href="/">View Full Article</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

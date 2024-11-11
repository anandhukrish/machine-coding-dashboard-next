import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonNewsCard = () => {
  return (
    <Card className="rounded-sm p-5">
      <Skeleton className="h-[100px] w-full mb-5" />
      <Skeleton className="h-[20px] w-full mb-3" />
      <Skeleton className="h-[20px] w-full mb-3" />
      <Skeleton className="h-[50px] w-full" />
    </Card>
  );
};

export default SkeletonNewsCard;

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Todo } from "@/lib/types";

type KanbanTaskItemProps = Todo;

const KanbanTaskItem = ({
  created,
  id,
  title,
  status,
}: KanbanTaskItemProps) => {
  return (
    <Card className="rounded-sm p-3 mb-3 mr-5">
      <CardTitle className="capitalize ">{title}</CardTitle>
      <CardContent className="px-0 flex justify-between pb-3">
        <span>{status}</span>
        <span>{created}</span>
      </CardContent>
    </Card>
  );
};

export default KanbanTaskItem;

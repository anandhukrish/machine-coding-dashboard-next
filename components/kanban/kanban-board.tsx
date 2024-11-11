import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Kanboard } from "@/lib/types";
import KanbanTaskItem from "./kanban-task-item";

type KanbanBoardProps = Kanboard;

const KanbanBoard = ({ title, lists }: KanbanBoardProps) => {
  return (
    <Card className=" w-[calc(100%_/_3)] rounded-md p-5 pr-0">
      <CardTitle className="text-lg capitalize mb-3">{title}</CardTitle>
      <CardContent className="px-0 max-h-[450px] h-[500px] overflow-scroll">
        {lists.length > 0 &&
          lists.map((list) => <KanbanTaskItem {...list} key={list.id} />)}
      </CardContent>
    </Card>
  );
};

export default KanbanBoard;

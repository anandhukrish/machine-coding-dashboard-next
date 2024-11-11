import KanbanBoard from "@/components/kanban/kanban-board";
import { Kanboard } from "@/lib/types";
import React from "react";

const boards: Kanboard[] = [
  {
    id: crypto.randomUUID(),
    status: "todo",
    title: "Todo List",
    lists: [],
  },
  {
    id: crypto.randomUUID(),
    status: "in-progress",
    title: "inprogress Todos",
    lists: [],
  },
  {
    id: crypto.randomUUID(),
    status: "done",
    title: "Task Completed",
    lists: [],
  },
];

const KanbanPage = () => {
  return (
    <div className="flex justify-between gap-6 pt-6">
      {boards.map((board) => (
        <KanbanBoard {...board} />
      ))}
    </div>
  );
};

export default KanbanPage;

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LayoutDashboard, Cloud, KanbanSquare, LineChart } from "lucide-react";

const routes = [
  {
    name: "Weather & news",
    href: "/dashboard/weather-news",
    icon: Cloud,
    active: (pathn: string) => pathn === "/dashboard/weather-news",
  },
  {
    name: "Kanban",
    href: "/dashboard/kanban",
    icon: KanbanSquare,
    active: (pathn: string) => pathn === "/dashboard/kanban",
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: LineChart,
    active: (pathn: string) => pathn === "/dashboard/analytics",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="border-b">
      <div className="container px-4 mx-auto py-2">
        <div className="flex gap-6 ">
          <Link
            href={"/dashboard/weather-news"}
            className="flex gap-2 items-center justify-center text-sm md:text-base"
          >
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>
          <div className="flex gap-4">
            {routes.map((route, index) => (
              <Link
                href={route.href}
                key={index}
                className={cn(
                  "flex gap-2 items-center justify-center p-2 rounded-xl transition-all duration-500 text-sm",
                  route.active(pathname) && " bg-slate-400/35"
                )}
              >
                <route.icon className="size-4 hidden md:block" />
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

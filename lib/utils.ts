import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timestampToTime = (timestamp: number) => {
  return format(timestamp, "pp");
};

export const timestampToDate = (timeStamp: number | string) => {
  return format(timeStamp, "dd/MM/yyyy");
};

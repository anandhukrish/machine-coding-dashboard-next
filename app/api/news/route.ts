import { newsApi } from "@/lib/axios";
import { NewsApiResponse } from "@/lib/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  const page = parseInt(url.get("page") || "1");
  try {
    const response = await newsApi.get<NewsApiResponse>("/top-headlines", {
      params: {
        page,
      },
    });
    return Response.json(response.data);
  } catch {
    return Response.json({ message: "Failed to fetch news data", status: 500 });
  }
}

type Weather = {
  id: number;
  description: string;
  icon: string;
  main: string;
};

export type WeatherApi = {
  weather: Weather[];
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
  wind: {
    speed: number;
  };
};

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Articles[];
};

export type Articles = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type BoardStatus = "todo" | "in-progress" | "done";

export type Kanboard = {
  id: string;
  status: BoardStatus;
  title: string;
  lists: Todo[];
};

export type Todo = {
  id: string;
  title: string;
  created: string;
  status: BoardStatus;
};

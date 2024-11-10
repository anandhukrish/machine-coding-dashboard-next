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
    humisity: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
};

export type NewsApi = {};

type BoardStatus = "started" | "ongoing" | "completed";

export type Kanboard = {
  id: string;
  status: BoardStatus;
  tasks: Task[];
};

export type Task = {
  id: string;
  name: string;
  created: string;
};

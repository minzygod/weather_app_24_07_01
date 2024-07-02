import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  return <div>Home</div>;
};

// 터미널에서 ctrl C 누르면 서버끊음

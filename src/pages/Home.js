import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 105, 0, 1) 0%,
    rgba(255, 152, 56, 1) 48%,
    rgba(255, 208, 75, 0.8564102564102565) 100%
  );
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  // console.log(lat, lon);

  console.log(data);
  // console.log(data?.main?.temp);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Container>
              <Header />
              <Section />
            </Container>
          )}
        </>
      )}
    </>
  );
};

// 터미널에서 ctrl C 누르면 서버끊음
// 자바스크립트 코드는 {}

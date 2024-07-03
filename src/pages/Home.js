import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Menu = styled.div`
  font-size: 26px;
`;

const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const More = styled.div`
  font-size: 26px;
`;

const Section = styled.div`
  margin-top: 50%;
  padding: 0 20px;
  h3 {
    font-size: 46px;
  }
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .temp {
    font-size: 180px;
    font-weight: 200;
    span {
      display: block;
      font-size: 90px;
      transform: translate(200px, -170px);
    }
  }
`;

const Temp = styled.div`
  width: 50%;
  &:nth-child(2) {
    height: 180px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Num = styled.div`
  font-size: 34px;
  font-weight: 300;
  padding: 20px 0;
  &:nth-child(2) {
    border-top: 1px solid #eee;
  }
`;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);
  console.log(data?.main?.temp);

  return (
    <Container>
      <Header>
        <Menu>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
        <MyLocation>
          <h3>BUSAN</h3>
          <p>Sat, 19:30 pm</p>
        </MyLocation>
        <More>
          <FontAwesomeIcon icon={faPlus} />
        </More>
      </Header>

      <Section>
        <h3>HOT</h3>

        <TempWrap>
          <Temp className="temp">
            {data?.main?.temp} <span>°</span>
          </Temp>

          <Temp>
            <Num>
              30 <span>°</span>c
            </Num>
            <Num>
              26 <span>°</span>c
            </Num>
          </Temp>
        </TempWrap>
      </Section>
    </Container>
  );
};

// 터미널에서 ctrl C 누르면 서버끊음

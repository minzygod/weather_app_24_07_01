import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/", //기본주소
  params: {
    appid: "11c5e44bd9c3357488ea2adeb76ac577",
    units: "metric",
    lang: "kr",
  }, //매개변수
});

//...JSON XML 더 알아보기
// 함수를 만든다는 것 = 기능을 만든다는 것

export const getWeather = ({ queryKey }) => {
  // console.log(queryKey);
  const [weather, lat, lon] = queryKey;
  //비구조화할당 할 때는 문자열 사용금지
  // console.log(weather);

  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
  //   get은 노출시켜야 할 정보 (자바스크립트 매서드 설명할 때 배움)
  //   post는 비밀번호 등 노출하지 않는 정보
};

// 비동기란?
// 효율적으로 느린 작업을 처리하는동안 빠른 작업들은 미리 처리해주는 것
// tan-stack-query

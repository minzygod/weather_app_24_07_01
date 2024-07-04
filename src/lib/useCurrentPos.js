import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = "35.1798200522868";
  const defaultLon = "129.075087492149";
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};

// 전역변수 지역변수
// 변수의 값을 저장할 때 상태의 값을 저장하는 것 => useState

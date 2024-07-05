import { Helmet } from "react-helmet-async";

export const Title = ({ titleName }) => {
  return (
    <Helmet>
      <title>Weather | {titleName}</title>
    </Helmet>
  );
};

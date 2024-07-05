import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyled } from "./GlobalStyled";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
// new -> 생성자 함수, construct function

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <GlobalStyled />
      <Router />
    </HelmetProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);

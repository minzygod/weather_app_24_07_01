import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

// *git
// => 파일의 변경, 추가, 삭제 등 파일이 기존내용에서
// 변경이 되면 기록을 남김
// => 백업 가능, 협업, 이전 파일로 되돌아가기 등
// 파일을 관리해주는 시스템

// *git hub
// => git에서 기록된 파일 또는 내용등
// 저장할 수 있는 저장소
// => 호스팅 사이트

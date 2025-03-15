import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoardpage from "./Freeboard/Freeboardpage";
import CreatePost from "./CreatePost";
import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';
import MyPage from "./MyPage/MyPage";
import LoginPage from "./login/LoginPage";
import AccountPage from "./account/AccountPage"
import NoticePage from "./notice/NoticePage"

import { useState } from "react";

// 아래 코드에 오류가 있어 실행이 안돼서 주석처리 하였습니다. 
// 사용자 정보 임시 객체
/*const [userInfo, setUserInfo] = useState({
    id: "TempId1234",
    name: "임시이름",
    studentId: "60240000",
    password: "TempPassword1234",
    entryYear: "24",
  });*/

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<NoticePage />} />
        {/* <Route index element={<FreeBoardpage />} /> */}
        <Route path="/freeBoard" element={<FreeBoardpage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/calendarpage" element={<MyCalendar/>} />
        <Route path="/mypage" element={<MyPage />} />
        </Routes>
    </Router>
  );
}

export default App;
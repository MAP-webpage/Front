import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoardpage from "./Freeboard/Freeboardpage";
import CreatePost from "./CreatePost";
import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';
import MyPage from "./MyPage/MyPage";

import { useState } from "react";

  // 사용자 정보 임시 객체
  // const [userInfo, setUserInfo] = useState({
  //   id: "TempId1234",
  //   name: "임시이름",
  //   studentId: "60240000",
  //   password: "TempPassword1234",
  //   entryYear: "24",
  // });

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
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
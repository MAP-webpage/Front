import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import PhotoDetail from "./Gallery/PhotoDetail";
import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';
import MyPage from "./MyPage/MyPage";

import { useState } from "react"; 

function App() {
  // 사용자 정보 임시 객체랄까요
  const [userInfo, setUserInfo] = useState({
    id: "TempId1234",
    name: "임시이름",
    studentId: "60240000",
    password: "TempPassword1234",
    entryYear: "24",
  });

  return (
    <Router>
      <Routes>
      <Route index element={<Mainpage userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/gallerypage/detail" element={<PhotoDetail/>} />
        <Route path="/calendarpage" element={<MyCalendar/>} />
        <Route path="/mypage" element={<MyPage userInfo={userInfo} setUserInfo={setUserInfo} />} /> 


        </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";
import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';
import MyPage from "./MyPage/MyPage";

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
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/calendarpage" element={<MyCalendar/>} />
        <Route path="/mypage" element={<MyPage userInfo={userInfo} setUserInfo={setUserInfo} />} /> 
        </Routes>
    </Router>
  );
}

export default App;
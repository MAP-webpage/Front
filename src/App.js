import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import PhotoDetail from "./Gallery/PhotoDetail";
import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/gallerypage/detail" element={<PhotoDetail/>} />
        <Route path="/calendarpage" element={<MyCalendar/>} />
        </Routes>
    </Router>
  );
}

export default App;

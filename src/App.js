import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import PhotoDetail from "./Gallery/PhotoDetail";
import Calenderpage from "./Calender/Calenderpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route index element={<FreeBoard />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/gallerypage/detail" element={<PhotoDetail/>} />
        <Route path="/calenderpage" element={<Calenderpage/>} />
        </Routes>
    </Router>
  );
}

export default App;

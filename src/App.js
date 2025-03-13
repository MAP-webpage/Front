import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoardpage from "./Freeboard/Freeboardpage";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import PhotoDetail from "./Gallery/PhotoDetail";
import Calenderpage from "./Calender/Calenderpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        {/* <Route index element={<FreeBoardpage />} /> */}
        <Route path="/freeBoard" element={<FreeBoardpage />} />
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

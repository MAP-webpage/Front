import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

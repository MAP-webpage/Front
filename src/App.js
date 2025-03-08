import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";
import FreeBoard from "./Freeboard";
import CreatePost from "./CreatePost";



import Calenderpage from "./Calendar/Calendarpage";
import MyCalendar from './Calendar/MyCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        <Route path="/calendarpage" element={<MyCalendar/>} />
        </Routes>
    </Router>
  );
}

export default App;

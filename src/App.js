import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Gallerypage from "./Gallery/Gallerypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
        </Routes>
    </Router>
  );
}

export default App;
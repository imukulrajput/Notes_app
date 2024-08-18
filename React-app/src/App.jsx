import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive.jsx";
import Bin from "./pages/Bin.jsx";
import Important from "./pages/Important.jsx";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/archive" element={<Archive/>}></Route>
      <Route path="/bin" element={<Bin/>}></Route>
      <Route path="important" element={<Important/>}></Route>
    </Routes>
  );
}

export default App;

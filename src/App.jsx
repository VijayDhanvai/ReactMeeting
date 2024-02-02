import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import Room from "./Room";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;

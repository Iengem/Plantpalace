import "./App.css";
import Homepage from "./components/Homepage/homePage";
import { Routes,Route, Router } from "react-router";
import Plants from "./components/Plants/Plants";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}></Route>
        <Route path="/Plants" element = {<Plants/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

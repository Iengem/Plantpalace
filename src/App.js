import "./App.css";
import Homepage from "./components/Homepage/homePage";
import { Route,Routes,Router } from "react-router";
import Plants from "./components/Plants/Plants";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}> </Route>
        <Route path="/plant" element = {<Plants/>}> </Route>
      </Routes>
      </div>
  );
}

export default App;

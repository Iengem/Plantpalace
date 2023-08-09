import logo from "./logo.svg";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import hero from "./components/hero/hero";
import Hero from "./components/hero/hero";
import TopBar from "./components/topbar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Hero/>
      </div>
  );
}

export default App;

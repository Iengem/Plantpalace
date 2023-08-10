import logo from "./logo.svg";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import hero from "./components/hero/hero";
import Hero from "./components/hero/hero";
import TopBar from "./components/topbar/TopBar";
import PreFooter from "./components/preFooter/PreFooter";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Hero/>
      <PreFooter/>
      </div>
  );
}

export default App;

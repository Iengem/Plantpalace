import "./App.css";
import Homepage from "./components/Homepage/homePage";
import Plants from "../src/components/Plant/Plant";
import { Routes,Route, } from "react-router";

function App() {
  return (
    <div className="App">
    <Homepage/>
    <Plants/>
   
      
   
      </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import BaiTapPropsState from "./Components/BaiTapPropsState";

function App() {
  return (
    <div className="App">
      <img src="./img/background.jpg" />
      <div className="App__overlay">
        <h1 className="py-3 mb-5 text-center title">TRY GLASSES APP ONLINE</h1>
        <BaiTapPropsState />
      </div>
    </div>
  );
}

export default App;

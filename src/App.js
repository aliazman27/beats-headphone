import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import DashBoard from "./components/DashBoard/DashBoard";
import Error from "./components/Error/Error";
import Review from "./components/Review/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

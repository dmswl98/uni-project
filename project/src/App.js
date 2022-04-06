import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ImageUpload from "./pages/ImageUpload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import axios from "axios";

function App() {
  // 요청받은 정보를 담아줄 변수 선언
  const [testStr, setTestStr] = useState("");
  const [readall, setReadall] = useState("");

  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  function callback2(str) {
    setReadall(str);
  }

  //첫 번째 렌더링을 마친 후 실행
  useEffect(() => {
    axios({
      url: "home",
      method: "GET",
    }).then((res) => {
      callback(res.data);
    });
  }, []);

  useEffect(() => {
    axios({
      url: "readall",
      method: "GET",
    }).then((res) => {
      callback2(res.data[0].loginId);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<ImageUpload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div>
        {testStr}
        <p key={"key"}>{readall}</p>
      </div>
    </>
  );
}

export default App;

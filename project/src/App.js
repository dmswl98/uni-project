import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageUpload from "./pages/ImageUpload";
import AxiosEx from "./components/AxiosEx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<ImageUpload />} />
          </Routes>
        </div>
      </BrowserRouter>
      <AxiosEx />
    </>
  );
}

export default App;

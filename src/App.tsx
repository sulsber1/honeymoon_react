import { useState } from "react";
import "./App.css";
import PhotoGallery from "./PhotoGallery";
import Banner from "./Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner></Banner>
      <div className="main-container">
        <PhotoGallery />
      </div>
    </>
  );
}

export default App;

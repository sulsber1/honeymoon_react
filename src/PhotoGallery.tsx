import "react-photo-view/dist/react-photo-view.css";
import imagesModule from "../public/images";
import { PhotoProvider, PhotoView } from "react-photo-view";

const images = import.meta.glob("../public/*");
var pictureExamples = Object.keys(images).map((key) => key);

console.dir(pictureExamples);

export default function PhotoGallery() {
  return (
    <PhotoProvider className="photo-container">
      {pictureExamples.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" />
        </PhotoView>
      ))}
    </PhotoProvider>
  );
}

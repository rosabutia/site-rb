import PhotoGallery from "../components/PhotoGallery.jsx";
import { galleries } from "../photos/photos.js";

export default function PhotosChale3() {
  return <PhotoGallery title="Chalé #3" photos={galleries.chale3} />;
}

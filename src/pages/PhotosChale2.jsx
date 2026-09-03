import PhotoGallery from "../components/PhotoGallery.jsx";
import { galleries } from "../photos/photos.js";

export default function PhotosChale2() {
  return <PhotoGallery title="Chalé #2" photos={galleries.chale2} />;
}

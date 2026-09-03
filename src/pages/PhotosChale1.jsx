import PhotoGallery from "../components/PhotoGallery.jsx";
import { galleries } from "../photos/photos.js";

export default function PhotosChale1() {
  return <PhotoGallery title="Chalé #1" photos={galleries.chale1} />;
}

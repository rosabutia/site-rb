import PhotoGallery from "../components/PhotoGallery.jsx";
import { galleries } from "../photos/photos.js";

export default function Photos() {
  return <PhotoGallery title="Fotos gerais" photos={galleries.externas} />;
}

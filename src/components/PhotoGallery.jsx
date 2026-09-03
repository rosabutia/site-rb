import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/**
 * Galeria de fotos com layout em mosaico e visualizador em tela cheia.
 *
 * @param {{ title: string, photos: { src: string, width: number, height: number, alt?: string }[] }} props
 */
export default function PhotoGallery({ title, photos }) {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <h2>{title}</h2>
      <MasonryPhotoAlbum
        photos={photos}
        columns={(containerWidth) => (containerWidth < 600 ? 2 : 3)}
        spacing={8}
        sizes={{
          size: "1100px",
          sizes: [{ viewport: "(max-width: 1100px)", size: "94vw" }],
        }}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </div>
  );
}

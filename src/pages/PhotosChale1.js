import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { photos } from "../photos/photos.js";

function FunctionPhotosChale1() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photoschale1 = photos.filter(function(elt, index) {
    var upperThreshold = 13;
    var lowerThreshold = 0;
    return index < upperThreshold && index >= lowerThreshold;
  });

  return (
    <div>
      <h2>Imagens do Chalé 1</h2>
      <Gallery
        photos={photoschale1}
        direction={"column"}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photoschale1.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default FunctionPhotosChale1;

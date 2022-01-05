import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { photos } from "../photos/photos.js";

function FunctionPhotosChale2() {

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

  const photoschale2 = photos.filter(function(elt, index) {
    var upperThreshold = 6;
    var lowerThreshold = 3;
    return index < upperThreshold && index >= lowerThreshold;
  });

  return (
    <div>
      <h2>Chale 2</h2>
      <Gallery
        photos={photoschale2}
        direction={"column"}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photoschale2.map(x => ({
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

export default FunctionPhotosChale2;

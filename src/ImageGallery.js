import React, { useState } from 'react';
import Modal from 'react-modal';


const ImageGallery = ({ images }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); 

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => openModal(image)}
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Full Screen Image"
      >
        {selectedImage && (
          <img src={selectedImage.src} alt={selectedImage.alt} />
        )}
        <button onClick={closeModal}>Close </button>
      </Modal>
    </div>
  );
};

export default ImageGallery;
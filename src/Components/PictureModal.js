import React from "react";
import { Modal } from "flowbite-react";

const PictureModal = ({ modalOpen, setModalOpen, data }) => {
  return (
    <Modal dismissible show={modalOpen} onClose={() => setModalOpen(false)}>
      <Modal.Body>
        <img src={data.image} alt="No preview" />
      </Modal.Body>
    </Modal>
  );
};

export default PictureModal;

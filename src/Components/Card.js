import React, { useState } from "react";
import LikeRatio from "./LikeRatio";
import PictureModal from "./PictureModal";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";

const ProdCard = ({ data, setDeleteById, deleteById }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };

  const [openCloseModal, setOpenCloseModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
        className="CardContainer"
      >
        <div>
          <div onClick={openModal} className="imageBox">
            <img className="image" src={data.image} alt="Not found" />
          </div>
          <div className="textContainer">
            <p className="title">{data.title}</p>
            <p className="category">{data.category}</p>
            <p className={`longText ${!show ? "expanded" : ""}`}>
              {data.details}
            </p>
            <p onClick={showMore} className="showMore">
              {show ? "Show more" : "Show less"}
            </p>
          </div>
        </div>
        <div>
          <LikeRatio LikeData={data} />
          <button
            onClick={() => setOpenCloseModal(true)}
            className="deleteButton"
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </motion.div>
      <Modal show={openCloseModal} onClose={() => setOpenCloseModal(false)}>
        <Modal.Header>Delete product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="red"
            onClick={() => setDeleteById([...deleteById, data.id])}
          >
            Confirm
          </Button>
          <Button color="gray" onClick={() => setOpenCloseModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <PictureModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
      />
    </>
  );
};

export default ProdCard;

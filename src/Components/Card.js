import React, { useState } from "react";
import LikeRatio from "./LikeRatio";
import PictureModal from "./PictureModal";
import { motion, AnimatePresence } from "framer-motion";

const ProdCard = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <AnimatePresence>
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
        <LikeRatio LikeData={data} />
      </motion.div>
      <PictureModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
      />
    </AnimatePresence>
  );
};

export default ProdCard;

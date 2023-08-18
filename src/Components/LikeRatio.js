import React, { useEffect, useState } from "react";

const LikeRatio = ({ LikeData }) => {
  console.log(LikeData.likes);
  const [likePercentage, setLikePercentage] = useState(0);
  const [dislikePercentage, setDisLikePercentage] = useState(0);
  useEffect(() => {
    if (LikeData.likes === LikeData.dislikes) {
      setLikePercentage(50);
      setDisLikePercentage(50);
    } else {
      setLikePercentage(
        (LikeData.likes / (LikeData.dislikes + LikeData.likes)) * 100
      );
      setDisLikePercentage(
        (LikeData.dislikes / (LikeData.dislikes + LikeData.likes)) * 100
      );
    }
  }, []);

  return (
    <div className="ratioContainer">
      <div>
        <div className="flex justify-between mb-1">
          <div className="flex justify-between mb-1 gap-1 items-center">
          <i class="bi bi-hand-thumbs-up-fill"></i>
            <span className="text-xs font-small text-orange-600 dark:text-white">
              {Math.round(likePercentage)}%
            </span>
          </div>
          <div className="flex justify-between mb-1 gap-1 items-center">
          <i class="bi bi-hand-thumbs-down-fill"></i>
            <span className="text-xs font-small text-gray-400 dark:text-white">
              {Math.round(dislikePercentage)}%
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-400  h-1 dark:bg-gray-00">
          <div
            className="bg-red-600 h-1 "
            style={{ width: `${Math.round(likePercentage)}%` }}
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="ReactButtons">
        <div className="LikeButton">
         
          <i class="bi bi-hand-thumbs-up"></i> {LikeData.likes}
        </div>
        <div className="DislikeButton">
        <i class="bi bi-hand-thumbs-down"></i>
          {LikeData.dislikes}
        </div>
      </div>
    </div>
  );
};

export default LikeRatio;

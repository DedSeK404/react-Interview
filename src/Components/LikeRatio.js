import React, { useEffect, useState } from "react";

const LikeRatio = ({ LikeData }) => {
  const [addLike, setAddLike] = useState(LikeData.likes);
  const [addDisLike, setAddDisLike] = useState(LikeData.dislikes);
  const [like, setLike] = useState(0);
  const clickLike = () => {
    setLike(!like);
    setDislike(false);
    setAddLike(
      LikeData.likes == addLike ? addLike + 1 : LikeData.likes,
      setAddDisLike(LikeData.dislikes)
    );
  };
  const [dislike, setDislike] = useState(0);
  const clickDislike = () => {
    setDislike(!dislike);
    setLike(false);
    setAddDisLike(
      LikeData.dislikes == addDisLike ? addDisLike + 1 : LikeData.dislikes,
      setAddLike(LikeData.likes)
    );
  };

  const [likePercentage, setLikePercentage] = useState(0);
  const [dislikePercentage, setDisLikePercentage] = useState(0);
  useEffect(() => {
    if (addLike === addDisLike) {
      setLikePercentage(50);
      setDisLikePercentage(50);
    } else {
      setLikePercentage((addLike / (addDisLike + addLike)) * 100);
      setDisLikePercentage((addDisLike / (addDisLike + addLike)) * 100);
    }
  }, [addLike, addDisLike]);

  return (
    <div className="ratioContainer">
      <div>
        <div className="flex justify-between mb-1">
          <div>
            <i
              style={{ color: "#cf3801" }}
              className="bi bi-hand-thumbs-up-fill"
            ></i>
            <span className="text-xs font-small text-orange-600 dark:text-white">
              {Math.round(likePercentage)}%
            </span>
          </div>
          <div>
            <i
              style={{ color: "#9ca3af" }}
              className="bi bi-hand-thumbs-down-fill"
            ></i>
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
        <button
          onClick={clickLike}
          className={like ? "LikeButtonPressed" : "LikeButton"}
        >
          <i className="bi bi-hand-thumbs-up"></i> {addLike}
        </button>
        <button
          onClick={clickDislike}
          className={dislike ? "DislikeButtonPressed" : "DislikeButton"}
        >
          <i className="bi bi-hand-thumbs-down"></i>
          {addDisLike}
        </button>
      </div>
    </div>
  );
};

export default LikeRatio;

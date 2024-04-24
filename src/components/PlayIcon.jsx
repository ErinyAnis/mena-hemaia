import React, { useState } from "react";
import Modal from "react-modal";
import * as IoIcons from "react-icons/io";
import playVideoIcon from "../assets/play-video-icon.webp";

const YouTubePopup = ({ isOpen, onRequestClose, videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="YouTube Video Popup"
      ariaHideApp={false} // Set to true in production with correct accessibility attributes
    >
      <div className="video-modal">
        <div className="close-modal text-end">
            <IoIcons.IoIosClose onClick={onRequestClose} className="me-2" />
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

const PlayIcon = ({ videoId }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <img
        src={playVideoIcon} // Path to your play image icon
        alt="Play YouTube video"
        className="play-video-icon"
        onClick={handleOpenPopup}
      />
      <YouTubePopup
        isOpen={isPopupOpen}
        onRequestClose={handleClosePopup}
        videoId={videoId} // Pass the YouTube video ID
      />
    </div>
  );
};

export default PlayIcon;

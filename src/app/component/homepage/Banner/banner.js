"use client";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
      console.log("TEsr");
      
    }, 3000); // 3-second delay

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  const bannerStyle = {
    position: "relative",
    height: "100vh",
    color: "white",
    objectFit: "contain",
    backgroundImage: !isPlaying
      ? `url('https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdj5ybvlejiMOCUedGWOFNOFNrkn7DhsHYTgJpUSxZ_ExxPDZV6MSjmCB34e-1Mt2a-zhiLsSw7HqpQl2jCbW0Ed9aKpIfimV_4f.webp?r=1dd')`
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transition: "background-image 0.5s ease-in-out",
  };

  const contentStyle = {
    position: "absolute",
    top: isPlaying ? "10%" : "40%",
    left: "30px",
    zIndex: 2,
    transform: isPlaying ? "scale(0.5)" : "scale(1)",
    transformOrigin: "top left",
    transition: "all 0.5s ease-in-out",
  };

  const logoStyle = {
    width: isPlaying ? "20%" : "35%",
    marginBottom: "20px",
    transition: "width 0.5s ease-in-out",
  };

  const buttonsStyle = {
    display: "flex",
    gap: "10px",
    opacity: isPlaying ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
  };

  const buttonStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    padding: "8px 20px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "none",
    outline: "none",
    transition: "all 0.3s",
  };

  const playButtonStyle = {
    backgroundColor: "white",
    color: "black",
  };

  const moreInfoButtonStyle = {
    backgroundColor: "rgba(51, 51, 51, 0.5)",
    color: "white",
  };

  const fadeBottomStyle = {
    position: "absolute",
    bottom: 0,
    height: "7.4rem",
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
    width: "100%",
  };

  return (
    <div style={bannerStyle}>
      {isPlaying ? (
        <video
          width="100%"
          height="100%"
          src="https://cdn.shopify.com/videos/c/o/v/1ec802dbb0974e7abee3bd0fd177766f.mp4"
          autoPlay
          muted
          controls={false}
          style={{ objectFit: "cover" }}
        ></video>
      ) : null}

      <div style={contentStyle}>
        <img
          src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSDoSth_vWOv85IXucSH3NMaCnmXJNJ1AC9Vy0n1bIhPrGhwTF11SvrOO-p7MxJbMK7XNxbWlsdl6hB7lxPxksZzmzkw7oAx9M6SMcyIkKweX4hJQQCHywzxePr0ygFHGZGB_T26mWhJxot6T8R3s9fzYq1bTz5QBRf1tGmtydO5W5f1BFw5uA.webp?r=e58"
          alt="Movie Logo"
          style={logoStyle}
        />
        <div style={buttonsStyle}>
          <button style={{ ...buttonStyle, ...playButtonStyle }}>▶ Play</button>
          <button style={{ ...buttonStyle, ...moreInfoButtonStyle }}>
            ℹ More Info
          </button>
        </div>
      </div>

      <div style={fadeBottomStyle}></div>
    </div>
  );
}


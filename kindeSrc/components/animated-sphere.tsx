"use server";

import React from "react";

export const AnimatedSphere: React.FC = () => {
  return (
    <div className="sphere-wrap" aria-hidden="true">
      <video autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto">
        <source src="/sphere.webm" type="video/webm" />
      </video>
    </div>
  );
};

"use server";

import React from "react";

export const AnimatedSphere: React.FC = () => {
  return (
    <div className="sphere-wrap" aria-hidden="true">
      <canvas id="resetui-auth-sphere" />
    </div>
  );
};

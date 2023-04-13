import React from 'react';

import { useState } from "react";

function BlobEffect() {
  const [blobStyle, setBlobStyle] = useState({});

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    setBlobStyle({
      position: "absolute",
      left: `${clientX}px`,
      top: `${clientY}px`,
      transition: "all 3s ease-in-out",
    });
  };

  return (
    <>
      <div
        id="blob"
        style={blobStyle}
        onPointerMove={handlePointerMove}
      ></div>
      <div id="blur"></div>
    </>
  );
}

export default BlobEffect;

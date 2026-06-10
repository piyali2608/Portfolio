import React from 'react';

const CosmicSmoke = () => {
  return (
    <>
      {/* Expanded Bound SVG Smoke Filter Map */}
      <svg style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter 
            id="cosmic-smoke-filter" 
            x="-50%" 
            y="-50%" 
            width="200%" 
            height="200%"
            filterUnits="userSpaceOnUse"
          >
            {/* Generates realistic cloud noise textures */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            />
            {/* Warps the boundaries of the shapes organically */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="120"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Layered floating smoke cloud emitters */}
      <div className="smoke-wrapper">
        <div className="smoke-cloud smoke-1" />
        <div className="smoke-cloud smoke-2" />
        <div className="smoke-cloud smoke-3" />
      </div>
    </>
  );
};

export default CosmicSmoke;
"use client"
import React from 'react';
import { BounceLoader } from "react-spinners"

function Preloader() {
  return (
    <div className="loader-container">
          <div>
            <BounceLoader
              color='#9d6c4e'
              // loading={loading}
              size={80}
            />
          </div>
        </div>
  );
}

export default Preloader;

import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <div class="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

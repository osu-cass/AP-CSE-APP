import React from 'react';
import { Loader, RotateCw } from 'react-feather';

export const Loading = () => (
  <div className="loading-container">
    <div className="loader">
      <Loader />
    </div>
    <div className="message">
      <p>Loading</p>
    </div>
    <style jsx>{`
      p {
        margin-top: 0.5em;
      }

      .loading-container {
        font-family: 'PT Sans Caption', sans-serif;
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .loader {
        display: flex;
        align-items: center;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

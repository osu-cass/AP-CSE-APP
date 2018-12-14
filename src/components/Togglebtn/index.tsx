import React, { Fragment } from 'react';
import { Colors } from '../../constants';
import css from 'styled-jsx/css';

const globalToggleStyle = css`
  .toggle-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pt-toggle {
    margin-left: 10px;
    font-size: 30px;
    color: #b3b3b3;
  }
  .inner-text {
    font-size: 0.8em;
    color: ${Colors.sbWhite};
  }
  .inner-text.no {
    margin-left: -20px;
  }
  .inner-text.yes {
    margin-left: -39px;
  }
`;

// export const renderPtToggle = (): JSX.Element => {
//     let content: JSX.Element;
//     if (true) {
//     content=(
//         <div className="toggle-container">
//             <span>Show Preformance Tasks only</span>
//             <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 36 36" fill={Colors.sbBlueLighter} stroke="none" className="pt-toggle">
//                 <rect x="1" y="8" width="40" height="20" rx="10" ry="10"></rect>
//                 <circle cx="30" cy="18" r="8" fill="white"></circle>
//             </svg>
//             <span className="inner-text yes">yes</span>
//             <style jsx global>
//                {globalToggleStyle}
//             </style>
//         </div>
//       );
//     }
//     else {
//         content=(
//           <div className="toggle-container" >
//             <span>Show Preformance Tasks only</span>
//             <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 36 36" fill="currentColor" stroke="none" className="pt-toggle">
//                 <rect x="1" y="8" width="40" height="20" rx="10" ry="10"></rect>
//                 <circle cx="11" cy="18" r="8" fill="white"></circle>
//             </svg>
//             <span className="inner-text no" > No </span>
//             <style jsx global>
//                 {globalToggleStyle}
//             </style>
//           </div>
//         );
//     }
//     return content;
//   };

export const PtToggleYes: React.SFC = () => (
  <div className="toggle-container">
    <span>Show Preformance Tasks only</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="36"
      viewBox="0 0 36 36"
      fill={Colors.sbBlueLighter}
      stroke="none"
      className="pt-toggle"
    >
      <rect x="1" y="8" width="40" height="20" rx="10" ry="10" />
      <circle cx="30" cy="18" r="8" fill="white" />
    </svg>
    <span className="inner-text yes">yes</span>
    <style jsx global>
      {globalToggleStyle}
    </style>
  </div>
);
export const PtToggleNo: React.SFC = () => (
  <div className="toggle-container">
    <span>Show Preformance Tasks only</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="36"
      viewBox="0 0 36 36"
      fill="currentColor"
      stroke="none"
      className="pt-toggle"
    >
      <rect x="1" y="8" width="40" height="20" rx="10" ry="10" />
      <circle cx="11" cy="18" r="8" fill="white" />
    </svg>
    <span className="inner-text no"> No </span>
    <style jsx global>
      {globalToggleStyle}
    </style>
  </div>
);

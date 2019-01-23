import React from 'react';

import { mediaQueryWrapper, DesktopBreakSize } from '../MediaQueryWrapper';

export const Footer: React.SFC = () => {
  return (
    <div className="footer-container">
      <div className="footer-sub-container">
        <div className="copyright">© The Regents of the University of California.</div>
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href="//www.smarterbalanced.org">
            Smarter Balanced Assessment Consortium
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="//www.smarterbalanced.org/privacy-policy/"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <style jsx>{`
        p {
          margin-top: auto;
          margin-bottom: auto;
        }

        .footer-container {
          font-family: PT Sans;
          background-color: #ebebeb;
          display: flex;
          flex-flow: row wrap;
          height: 50px;
          align-content: center;
          align-items: center;
          justify-content: center;
          letter-spacing: 0;
          bottom: 0;
          position: fixed;
          width: 100%;
        }

        .footer-sub-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 95%;
        }

        .copyright {
          flex-grow: 2;
          justify-content: flex-start;
        }

        .links {
          display: flex;
          flex-grow: 1;
          justify-content: space-around;
        }

        .links > a,
        .links > a:visited {
          color: #007393;
        }

        .links > a:hover,
        .links > a:active {
          color: #111213;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export const FooterWrapped = mediaQueryWrapper(Footer, DesktopBreakSize);

import React, { Component } from 'react';

import { IClaim } from '../../models/claim';
import { Colors } from '../../constants/style';
import { MobileBreakSize } from '../MediaQueryWrapper';
import { DownloadModal, DownloadModalProps } from '../DownloadModal';

/**
 * interface for DownloadBtn
 * @export
 * @interface DownloadBtnProps
 */
export interface DownloadBtnProps {
  claim: IClaim;
}

export interface DownloadBtnState {
  modal: DownloadModalProps;
}

/**
 * Renders a download button with a download feather image
 * @export
 * @function {DownloadBtn}
 * @param {string} url
 * @param {string} filename
 */

export class DownloadBtn extends Component<DownloadBtnProps, DownloadBtnState> {
  constructor(props: DownloadBtnProps) {
    super(props);
    this.state = {
      modal: {
        claim: props.claim,
        isOpen: false
      }
    };
  }

  showHideModal = () => {
    const curModal = this.state.modal;
    curModal.isOpen = !this.state.modal.isOpen;
    this.setState({ modal: curModal });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter') {
      this.showHideModal();
    }
  };

  render() {
    return (
      <div id="download-btn-container">
        <DownloadModal {...this.state.modal} closeFromParent={this.showHideModal} />
        <a
          aria-label="Download"
          role="button"
          onClick={this.showHideModal}
          id="download-btn"
          tabIndex={0}
          onKeyPress={this.handleEnterPress}
        >
          {/* tslint:disable-next-line:no-unsafe-any */}
          <i className="fa fa-cloud-download cloud" />
        </a>
        <div className="download-label">Download</div>
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }
          a {
            color: ${Colors.sbWhite};
            font-size: 30px;
            cursor: pointer;
          }
          .download-label {
            font-size: 15px;
          }
          #download-btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: White;
          }
          @media (max-width: ${MobileBreakSize.maxWidth}px) {
            .download-label {
              display: none;
            }
            a {
              fontsize: 1em;
            }
          }
        `}</style>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { DownloadCloud } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../constants';
import { DownloadModal, DownloadModalProps } from '../DownloadModal/index';

/**
 * interface for DownloadBtn
 * @export
 * @interface DownloadBtnProps
 */
export interface DownloadBtnProps {
  url: string;
  filename: string;
  taskNames?: string[];
}

export interface DownloadBtnState {
  url: string;
  filename: string;
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
      url: props.url,
      filename: props.filename,
      modal: {
        taskModels: props.taskNames,
        isOpen: false
      }
    };
  }
  showHideModal = () => {
    const curModal = this.state.modal;
    curModal.isOpen = !this.state.modal.isOpen;
    this.setState({ modal: curModal });
  };
  render() {
    return (
      <div id="download-btn-container">
        <DownloadModal {...this.state.modal} closeFromParent={this.showHideModal} />
        <a aria-label="Download" role="button" onClick={this.showHideModal} id="download-btn">
          <FontAwesomeIcon className="cloud" icon={faCloudDownloadAlt} />
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
        `}</style>
      </div>
    );
  }
}

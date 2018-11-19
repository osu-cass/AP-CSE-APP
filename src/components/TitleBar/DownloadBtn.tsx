import React, { Component } from 'react';
import { Download } from 'react-feather';
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
    // tslint:disable: no-unsafe-any no-any;
    this.showHideModal = this.showHideModal.bind(this);
    // tslint:enable: no-unsafe-any no-any;
  }
  showHideModal() {
    const curModal = this.state.modal;
    curModal.isOpen = !this.state.modal.isOpen;
    this.setState({ modal: curModal });
  }
  render() {
    return (
      <div id="download-btn-container">
        <DownloadModal {...this.state.modal} closeFromParent={this.showHideModal} />
        <a aria-label="Download" role="button" onClick={this.showHideModal} id="download-btn">
          <Download />
          <style jsx>{`
            * {
              margin: 0;
              padding: 0;
            }
            a {
              color: ${Colors.sbGrayLighter};
            }
            a:hover {
              color: ${Colors.sbGray};
            }
          `}</style>
        </a>
      </div>
    );
  }
}

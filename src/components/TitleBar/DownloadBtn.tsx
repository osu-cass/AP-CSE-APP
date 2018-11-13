import React, { Component } from 'react';
import { Download } from 'react-feather';
import { Colors } from '../../constants';
import { DownloadModal } from '../DownloadModal';

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
  modalOpen: boolean;
  modal: JSX.Element;
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
      modalOpen: false,
      modal: <DownloadModal isOpen={true} taskModels={this.props.taskNames} />
    };
    // tslint:disable-next-line: no-unsafe-any no-any;
    this.showHideModal = this.showHideModal.bind(this);
  }
  showHideModal() {
    this.setState({ modalOpen: true });
  }
  render() {
    return (
      <div id="download-btn-container">
        {this.state.modalOpen ? this.state.modal : ''}
        <a aria-label="Download" role="button" onClick={this.showHideModal}>
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

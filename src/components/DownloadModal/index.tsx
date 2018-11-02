import React, { Component } from 'react';
// tslint:disable-next-line
import Modal from 'react-modal';
import { Colors, Styles, blueGradientBgImg } from '../../constants';
import { TaskButton } from './TaskButton';
import _ from 'lodash';
// tslint:disable: no-unsafe-any no-any;
/**
 * Properties for DownloadModal
 * @export
 * @interface DownloadModalProps
 */
export interface DownloadModalProps {
  taskModels: string[];
}
/**
 * State for DownloadModal
 * @export
 * @interface DownloadModalProps
 */
export interface DownloadModalState {
  showModal: boolean;
  taskModelButtons: JSX.Element[];
}

const buttonStyles = `button {
  display: flex;
  flex-direction: column;
  width: 225px;
  margin-left: 15px;
  margin-right: 10px;
  height: 40px;
  text-align: center;
  text-align: -webkit-center;
  border: solid;
  line-height: 30px;
  border-color: ${Colors.sbGray};
  border-radius: 4px;
  background-color: #FFF;
  font-family: ${Styles.sbSans};
  font-size: 16px;
  color: ${Colors.sbGrayDarker};
  letter-spacing: ${Styles.sbLetterSpacing};
  }
.checked {
  background-image: ${blueGradientBgImg.backgroundImage};
  color: ${Colors.sbGrayLighter};
}
#entire-target-btn {
  margin-bottom: 12px;
}
#continue-btn {
  margin-top: 50px;
  margin-left: 40px;
  border: none;
  height: 30px;
  line-height: 26px;
  width: 175px;
  background-image: ${blueGradientBgImg.backgroundImage};
  color: ${Colors.sbGrayLighter};
}
#scrollable-btn-container {
  overflow-y: scroll;
  margin-right: -15px;
  height: 200px;
}
.selected {
  background-image: ${blueGradientBgImg.backgroundImage};
 }
`;
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');
/**
 * Renders a Modal window to download a document's targets
 * @export
 * @class {DownloadModal}
 * @param {DownloadModalProps} item
 */
export class DownloadModal extends Component<DownloadModalProps, DownloadModalState> {
  constructor(props: DownloadModalProps) {
    super(props);
    this.state = {
      showModal: false,
      taskModelButtons: this.generateButtons(props)
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  handleContinue() {
    return;
  }

  toggleButton = (taskName: string) => {
    const taskButtons = _.cloneDeep(this.state.taskModelButtons);
    if (taskName === 'Entire Target') {
      taskButtons.forEach(task => {
        task.props.toggle = false;
        task.props.cName = 'unchecked';
      });
      taskButtons[0].props.toggle = true;
      taskButtons[0].props.cName = 'checked';
      this.setState({ taskModelButtons: taskButtons });
    } else {
      const toggledButton = taskButtons.find(task => {
        return task.props.taskName === taskName;
      });
      const idx = taskButtons.findIndex(task => {
        return task.props.taskName === taskName;
      });
      if (toggledButton !== undefined) {
        taskButtons[0].props.toggled = false;
        taskButtons[0].props.cName = 'unchecked';
        toggledButton.props.toggled = !toggledButton.props.toggled;
        toggledButton.props.cName =
          toggledButton.props.cName === 'unchecked' ? 'checked' : 'unchecked';
        taskButtons[idx] = toggledButton;
        this.setState({ taskModelButtons: taskButtons });
      }
    }
  };

  generateButtons(props: DownloadModalProps): JSX.Element[] {
    const taskArray: JSX.Element[] = [];
    taskArray.push(
      <TaskButton
        toggled={true}
        cName="checked"
        id="entire-target"
        key="entiretarget"
        taskName="Entire Target"
        toggleParent={this.toggleButton}
      />
    );
    taskArray.push(
      <TaskButton
        toggled={false}
        cName="unchecked"
        id="overview"
        key="overview"
        taskName="Overview"
        toggleParent={this.toggleButton}
      />
    );
    for (const task of props.taskModels) {
      taskArray.push(
        <TaskButton
          toggled={false}
          cName="unchecked"
          id={task.replace(' ', '-').toLowerCase()}
          key={task}
          taskName={task}
          toggleParent={this.toggleButton}
        />
      );
    }

    return taskArray;
  }

  render() {
    const taskButtons = this.state.taskModelButtons.slice(1);

    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Download Modal"
          style={customStyles}
        >
          <form>
            <div id="entire-target-btn-container">{this.state.taskModelButtons[0]}</div>
            <div id="scrollable-btn-container">
              <div id="task-models-container">{taskButtons}</div>
            </div>
            <div id="submit-btn-container">
              <button type="button" onClick={this.handleContinue} id="continue-btn">
                Continue
              </button>
            </div>
            <style jsx>{buttonStyles}</style>
          </form>
        </Modal>
      </div>
    );
  }
}

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
  isOpen: boolean;
}
/**
 * State for DownloadModal
 * @export
 * @interface DownloadModalProps
 */
export interface DownloadModalState {
  showModal: boolean;
  showHide: string;
  showMultiSelect: string;
  taskModelButtons: JSX.Element[];
  selectedList: JSX.Element[];
  confirmArr: string[];
}

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

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

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
      showModal: props.isOpen,
      showHide: 'hidden',
      showMultiSelect: '',
      taskModelButtons: this.generateButtons(props),
      selectedList: [],
      confirmArr: []
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  /**
   * Handles the user clicking the Confirm Button
   *
   * To Do: Link result to PDF generation/download
   */

  handleConfirm() {
    const selectedArr: string[] = [];
    this.state.taskModelButtons.forEach(task => {
      if (task.props.toggled === true) {
        selectedArr.push(task.props.taskName);
      }
    });
    this.setState({ confirmArr: selectedArr });
    this.closeModal();
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  /**
   * Handles the user clicking the Continue Button
   *
   * Toggles hidden selections page and makes an unordered list of selected buttons
   */

  handleContinue() {
    const taskButtons = _.cloneDeep(this.state.taskModelButtons);
    const selectList: JSX.Element[] = [];
    this.createSelectionList(taskButtons, selectList);
    this.setState({
      showMultiSelect: 'hidden',
      showHide: '',
      selectedList: selectList
    });
  }

  /**
   * Generates a list of <li> elements containing all selected taskModels
   *
   */
  createSelectionList(taskButtons: JSX.Element[], selectList: JSX.Element[]) {
    taskButtons.forEach(task => {
      if (task.props.toggled === true) {
        selectList.push(
          <li key={task.props.taskName}>
            <style jsx>{`
              li {
                margin-bottom: 10px;
              }
            `}</style>
            {task.props.taskName}
          </li>
        );
      }
    });
  }

  /**
   * Handles the user clicking the Back Button on the confirm selection screen
   *
   * Toggles hidden selections page and clears the list of selected buttons
   */
  handleBackButton() {
    this.setState({
      showMultiSelect: '',
      showHide: 'hidden',
      selectedList: []
    });
  }

  /**
   * Toggles a selected button and handles multi-select/all-select logic
   *
   * This function is passed to the child Taskbutton objects as a prop to call onClick
   */
  toggleButton = (taskName: string) => {
    const taskButtons = _.cloneDeep(this.state.taskModelButtons);
    if (taskName === 'Entire Target') {
      this.toggleEntireTarget(taskButtons);
    } else {
      const { toggledButton, idx } = this.getToggled(taskButtons, taskName);
      if (toggledButton !== undefined) {
        this.toggleSelection(taskButtons, toggledButton, idx);
      }
    }
  };
  /**
   * Sets the toggled boolean and checked/unchecked classname for Taskbutton objects
   *
   * This function will untoggle the Entire Target button when setting a single Taskbutton
   */
  toggleSelection(taskButtons: JSX.Element[], toggledButton: JSX.Element, idx: number) {
    taskButtons[0].props.toggled = false;
    taskButtons[0].props.cName = 'unchecked';
    toggledButton.props.toggled = !toggledButton.props.toggled;
    toggledButton.props.cName = toggledButton.props.cName === 'unchecked' ? 'checked' : 'unchecked';
    taskButtons[idx] = toggledButton;
    this.setState({ taskModelButtons: taskButtons, selectedList: [] });
  }
  /**
   * Returns the object and index for whichever button was clicked/toggled
   *
   */
  getToggled(taskButtons: JSX.Element[], taskName: string) {
    const toggledButton = taskButtons.find(task => {
      return task.props.taskName === taskName;
    });
    const idx = taskButtons.findIndex(task => {
      return task.props.taskName === taskName;
    });

    return { toggledButton, idx };
  }
  /**
   * Toggles the EntireTarget taskbutton while untoggling all others
   *
   */
  toggleEntireTarget(taskButtons: JSX.Element[]) {
    taskButtons.forEach(task => {
      task.props.toggle = false;
      task.props.cName = 'unchecked';
    });
    taskButtons[0].props.toggle = true;
    taskButtons[0].props.cName = 'checked';
    this.setState({ taskModelButtons: taskButtons, selectedList: [] });
  }
  /**
   * Creates an array of JSX Elements containing TaskButtons to pass to the state
   *
   */
  generateButtons(props: DownloadModalProps): JSX.Element[] {
    const taskArray: JSX.Element[] = [];
    this.generateDefaultButtons(taskArray);
    for (const task of props.taskModels) {
      this.generateTaskButtons(taskArray, task);
    }

    return taskArray;
  }
  /**
   * Takes all Task Models passed in from props and creates corresponding TaskButtons, adding them into an array of JSX Elements
   *
   */
  generateTaskButtons(taskArray: JSX.Element[], task: string) {
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
  /**
   * Creates the 2 default "Entire Target" and "Overview" TaskButtons;
   *
   */
  generateDefaultButtons(taskArray: JSX.Element[]) {
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
    const overview = _.cloneDeep(taskArray[0]);
    overview.props = {
      toggled: false,
      cName: 'unchecked',
      id: 'overview',
      key: 'overview',
      taskName: 'Overview',
      toggleParent: this.toggleButton
    };
    taskArray.push(overview);
  }
  modalForm(taskButtons: JSX.Element[]): JSX.Element {
    return (
      <form className={this.state.showMultiSelect}>
        <div id="title-container">Download PDF</div>
        <div id="entire-target-btn-container">{this.state.taskModelButtons[0]}</div>
        <div id="scrollable-btn-container">
          <div id="task-models-container">{taskButtons}</div>
        </div>
        <div id="submit-btn-container">
          <button type="button" onClick={this.handleContinue} id="continue-btn">
            Continue
          </button>
        </div>
        <style jsx>{`
          button {
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
            background-color: #fff;
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
          #title-container {
            text-align: center;
            font-family: ${Styles.sbSans};
            font-size: 18px;
            font-weight: bold;
            color: ${Colors.sbGray};
            letter-spacing: ${Styles.sbLetterSpacing};
            margin-bottom: 5px;
            margin-top: -10px;
          }
          .hidden {
            display: none;
          }
        `}</style>
      </form>
    );
  }
  confirmSelection() {
    return (
      <div id="confirm-selections" className={this.state.showHide}>
        <div id="selections-title">Selected Sections</div>
        <div id="selections-list">
          <ul>{this.state.selectedList}</ul>
        </div>
        <div id="pdf-page-count">This PDF will be X pages</div>
        <div id="confirm-back-btn-container">
          <button type="button" id="back-btn" onClick={this.handleBackButton}>
            Back
          </button>
          <button type="button" id="confirm-btn" onClick={this.handleConfirm}>
            Confirm
          </button>
        </div>
        <style jsx>{`
          button {
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
            background-color: #fff;
            font-family: ${Styles.sbSans};
            font-size: 16px;
            color: ${Colors.sbGrayDarker};
            letter-spacing: ${Styles.sbLetterSpacing};
          }
          .hidden {
            display: none;
          }
          div {
            font-family: ${Styles.sbSans};
            text-align: center;
            letter-spacing: ${Styles.sbLetterSpacing};
            color: ${Colors.sbGray};
          }
          #selections-title {
            font-size: 20px;
            font-weight: bold;
            margin-right: 35px;
            margin-left: 35px;
            margin-bottom: 5px;
            margin-top: -10px;
          }
          #selections-list {
            overflow-y: auto;
            height: 200px;
            margin-left: -20px;
            text-align: left;
            font-size: 16px;
          }
          #pdf-page-count {
            font-size: 14px;
          }
          #confirm-back-btn-container button {
            width: 100px;
            background-image: ${blueGradientBgImg.backgroundImage};
            margin-top: 10px;
            display: inline-block;
            color: ${Colors.sbGrayLighter};
          }
        `}</style>
      </div>
    );
  }
  render() {
    const taskButtons = this.state.taskModelButtons.slice(1);

    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Download PDF"
          style={customStyles}
        >
          {this.modalForm(taskButtons)}
          {this.confirmSelection()}
        </Modal>
      </div>
    );
  }
}

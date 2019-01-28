import React from 'react';

import { Colors, Styles, blueGradientBgImg } from '../../constants/style';

export enum ToggleClassname {
  Checked = 'checked',
  Unchecked = 'unchecked'
}

export interface TaskButtonProps {
  taskName: string;
  id: string;
  toggled: boolean;
  cName: ToggleClassname;
  toggleParent: (taskName: string) => void;
}

export const TaskButton = (props: TaskButtonProps): JSX.Element => {
  return (
    <div id="button-container">
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
      <button
        type="button"
        role="switch"
        aria-checked={props.toggled}
        id={`${props.id}-btn`}
        onClick={() => {
          props.toggleParent(props.taskName);
        }}
        className={props.cName}
      >
        {props.taskName}
      </button>
    </div>
  );
};

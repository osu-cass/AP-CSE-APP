import React from 'react';
import { Styling } from './Styling';
export interface TaskButtonProps {
  taskName: string;
  id: string;
  toggled: boolean;
  cName: string;
  toggleParent: (taskName: string) => void;
}

export const TaskButton = (props: TaskButtonProps): JSX.Element => {
  return (
    <div id="button-container">
      <style jsx>{Styling}</style>
      <button
        type="button"
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

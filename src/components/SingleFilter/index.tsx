import React, { Component } from 'react';

export interface MyProps {
  active: boolean;
  id: string;
  onChange(obj: object): void;
  content: string;
  mode: SingleFilterMode;
}
export interface DropBoxProps {
  content: string;
}
export enum SingleFilterMode {

  small = 'small',
  mediumfirst = 'medium-first',
  mediumsecond = 'medium-second',
  large = 'large'

}

export class SingleFilter extends Component<MyProps> {
  render() {
    const active: boolean = this.props.active;
    let mode: string = this.props.mode;
    if (active === true) {
      mode = `${this.props.mode} green`;
    } else {
      mode = this.props.mode;
    }

    return (
      <div>
        <button onClick={() => this.props.onChange(this)} id={this.props.id} className={mode}>
          {this.props.content}
        </button>
        <style jsx>{`
          .small,.large,.medium-first,.medium-second{
            font-size:20px;
            height:50px;
            color:grey;
          }
          .small{
            border-radius:8px;
            width: 90px;
            margin-right:10px;
          }
          .medium-first,.medium-second{
            height:50px;
            width: 145px;
          }
          .medium-first{
            border-radius:8px 0px 0px 8px;
            border-right:1px solid grey;
          }
          .medium-second{
            border-radius:0px 8px 8px 0px;
            border-left:1px solid grey;
          }
          .large{
            border-radius:8px;
            width: 290px;
          }
          button{
            cursor:pointer;
          }
          .green{
            background-color:green;
          }
        `}</style>
      </div>
    );
  }
}

export class SingleDropBox extends Component<DropBoxProps> {
  render() {
    return (
      <option role="menuitem" className="single-option">
        {this.props.content}
        <style jsx>{`
          .single-option{
            width: 290px;
          }
        `}</style>
      </option>
    );
  }
}

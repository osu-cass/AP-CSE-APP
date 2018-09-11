import React, { Component } from 'react';
import { SingleFilter, SingleFilterMode, MyProps } from '../SingleFilter/index';

export class SubjectFilter extends Component {
  state = {
    Fliter: [{ active: false }, { active: false }]
  };
  handleClick = (obj: SingleFilter) => {
    const newBool: boolean = !obj.props.active;
    const id: string = obj.props.id;
    const index: number = parseInt(id, 10) - 1;
    const newFilter = { ...this.state };
    newFilter.Fliter.forEach(button => {
      button.active = false;
    });
    newFilter.Fliter[index].active = newBool;
    this.setState(newFilter);
  };
  render() {
    return (
      <div>
        <h2>Subeject and Grade</h2>
        <div className="row">
          <SingleFilter
            onChange={this.handleClick}
            id="1"
            content="ELA"
            active={this.state.Fliter[0].active}
            mode={SingleFilterMode.mediumfirst}
          />
          <SingleFilter
            onChange={this.handleClick}
            id="2"
            content="Math"
            active={this.state.Fliter[1].active}
            mode={SingleFilterMode.mediumsecond}
          />
        </div>
        <style jsx>{`
        .row{
          margin-top:10px;
          display:flex;
          flex-direction:row;
        }
        h2{
          text-align:center;
          color:grey;
          font-size:18px;
        }
        .subject-grade{
          margin-right:20px;
        }
      `}</style>
      </div>
    );
  }
}

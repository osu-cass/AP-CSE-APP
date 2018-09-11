import React, { Component } from 'react';
import { SingleFilter, SingleFilterMode } from '../SingleFilter/index';

export class GradeFilter extends Component {
  state = {
    Fliter: [
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false }
    ]
  };
  handleClick = (obj: SingleFilter) => {
    const newBool: boolean = !obj.props.active;
    const id: string = obj.props.id;
    const index: number = parseInt(id, 10) - 3;
    const newFilter = { ...this.state };
    newFilter.Fliter.forEach(single => {
      single.active = false;
    });
    newFilter.Fliter[index].active = newBool;
    this.setState(newFilter);
  };
  render() {
    return (
      <div>
        <div className="row">
          <SingleFilter
            onChange={this.handleClick}
            id="3"
            content="3"
            active={this.state.Fliter[0].active}
            mode={SingleFilterMode.small}
          />
          <SingleFilter
            onChange={this.handleClick}
            id="4"
            content="4"
            active={this.state.Fliter[1].active}
            mode={SingleFilterMode.small}
          />
          <SingleFilter
            onChange={this.handleClick}
            id="5"
            content="5"
            active={this.state.Fliter[2].active}
            mode={SingleFilterMode.small}
          />
        </div>
        <div className="row">
          <SingleFilter
            onChange={this.handleClick}
            id="6"
            content="6"
            active={this.state.Fliter[3].active}
            mode={SingleFilterMode.small}
          />
          <SingleFilter
            onChange={this.handleClick}
            id="7"
            content="7"
            active={this.state.Fliter[4].active}
            mode={SingleFilterMode.small}
          />
          <SingleFilter
            onChange={this.handleClick}
            id="8"
            content="8"
            active={this.state.Fliter[5].active}
            mode={SingleFilterMode.small}
          />
        </div>
        <div className="row">
          <SingleFilter
            onChange={this.handleClick}
            id="9"
            content="High School"
            active={this.state.Fliter[6].active}
            mode={SingleFilterMode.large}
          />
        </div>
        <style jsx>{`
        .row{
          margin-top:10px;
          display:flex;
          flex-direction:row;
        }
      `}</style>
      </div>
    );
  }
}

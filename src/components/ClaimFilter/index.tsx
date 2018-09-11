import React, { Component } from 'react';
import { SingleFilter, SingleFilterMode, MyProps } from '../SingleFilter/index';

export class ClaimFilter extends Component {
  state = {
    filters: [{ active: false }, { active: false }, { active: false }, { active: false }]
  };
  handleClick = (obj: SingleFilter) => {
    const newBool: boolean = !obj.props.active;
    const id: string = obj.props.id;
    const index: number = parseInt(id, 10) - 10;
    const newFilter = { ...this.state };
    newFilter.filters.forEach(single => {
      single.active = false;
    });
    newFilter.filters[index].active = newBool;
    this.setState(newFilter);
  };
  render() {
    return (
      <div>
        <h2>Claim</h2>
        <div className="col">
          <SingleFilter
            active={this.state.filters[0].active}
            onChange={this.handleClick}
            id="10"
            content="Lorem A"
            mode={SingleFilterMode.large}
          />
          <div className="row">
            <SingleFilter
              active={this.state.filters[1].active}
              onChange={this.handleClick}
              id="11"
              content="Ipsum B"
              mode={SingleFilterMode.large}
            />
          </div>
          <div className="row">
            <SingleFilter
              active={this.state.filters[2].active}
              onChange={this.handleClick}
              id="12"
              content="Amet D"
              mode={SingleFilterMode.large}
            />
          </div>
          <div className="row">
            <SingleFilter
              active={this.state.filters[3].active}
              onChange={this.handleClick}
              id="13"
              content="Elit E"
              mode={SingleFilterMode.large}
            />
          </div>
        </div>

        <style jsx>{`
        .row{
          margin-top:10px;
          display:flex;
          flex-direction:row;
        }
        .col{
          margin-top:0px;
          display:flex;
          flex-direction:column;
        }
        h2{
          text-align:center;
          color:grey;
          font-size:18px;
        }
      `}</style>
      </div>
    );
  }
}

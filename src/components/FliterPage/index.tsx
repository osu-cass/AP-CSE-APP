import React, { Component } from 'react';
import { SingleDropBox } from '../SingleFilter/index';
import { SubjectFilter } from '../SubjectFilter/index';
import { GradeFilter } from '../GradeFilter/index';
import { ClaimFilter } from '../ClaimFilter/index';

export class FilterPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1>Select Target Criteria</h1>
          <button>Go</button>
        </div>
        <div className="row">
          <div className="subject-grade">
            <SubjectFilter />
            <GradeFilter />
          </div>
          <div className="claim">
            <ClaimFilter />
          </div>
        </div>
        <div className="row">
          <div className="col target">
            <h2>Target</h2>
            <select className="drop-box">
              <SingleDropBox content="Select a target..." />
              <SingleDropBox content="Aliqua X" />
              <SingleDropBox content="Magna W" />
              <SingleDropBox content="Aliqua X" />
              <SingleDropBox content="Aliqua X" />
              <SingleDropBox content="Magna W" />
              <SingleDropBox content="Aliqua X" />
            </select>
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
        .subject-grade{
          margin-right:20px;
        }
        .target{
          margin-right:30px;
        }
        .drop-box{
          background-color:whitesmoke;
          width: 290px;
          font-size:20px;
          height:50px;
          color:grey;
          text-align-last:center;
        }
        h1{
          color:grey;
          font-size:25px;
          margin-left:25px;
        }
        button{
          background-color:#006298;
          color:white;
          height:40px;
          border-radius:8px;
          font-size:20px;
          width: 150px;
          margin-left:200px;
          cursor:pointer;
        }
      `}</style>
      </div>
    );
  }
}

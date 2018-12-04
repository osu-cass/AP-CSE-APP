import React from 'react';
import homeLogo from '../../assets/images/home-page.jpg';
import { Link } from 'react-router-dom';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';

const importedLogo = homeLogo as string;

// cSpell:disable
const HomePageComponent = () => (
  <div className="content">
    <div className="element-wrapper" />
    <div className="passage">
      <h1 className="passage-title">Welcome to Content Spec Explorer!</h1>
      <div className="passage-content">
        The CSE website provides easy access to a host of Smarter Balanced’s test development
        documents. The primary resources in the CSE are the Item Specifications (“Item Specs”). Item
        Specs outline how assessment items are to be written so the response shows evidence that the
        students have the skills/knowledge to perform the item/task. The Item Specs are used by the
        test development team to produce consistent, well-aligned items across the content areas.
        Educators are encouraged to implement a similar structure when preparing classroom-level
        assessments for both summative and formative uses.
      </div>
      <div className="buttons">
        <Link to="/search">
          <button className="single-button">Navigate to a Target</button>
        </Link>
        <Link to="/development">
          <button className="single-button">Learn About Test Development</button>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: row;
        font-family: PT Serif;
        flex-wrap: wrap;
        justify-content: left;
        margin-top: 40px;
      }
      @media (min-width: 1500px) {
        .content {
          margin-left: -30px;
        }
      }
      .passage {
        padding: 20px;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 50px;
        background-color: #fff;
      }
      .passage-title {
        font-size: 20px;
        font-weight: bold;
      }
      .passage-content {
        width: 330px;
        padding-bottom: 15px;
        border-bottom: 1px solid black;
      }
      .buttons {
        display: flex;
        flex-direction: column;
      }
      .single-button {
        margin-top: 20px;
        background-image: linear-gradient(to right, #006298 70%, #177c9e);
        color: white;
        font-size: 15px;
        padding: 6px;
        width: 330px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid black;
        cursor: pointer;
      }
      .element-wrapper {
        width: 100%;
        flex-basis: 100%;
      }

      :global(.home-image) {
        background-image: url("${homeLogo}");
        background-size: cover;
        background-position: 0% 20%;
        background-repeat: no-repeat;
        height: 100%;
      }
    `}</style>
  </div>
);
// cSpell:enable

export const HomePage = genericLayout(
  <Title>Content Specification Explorer</Title>,
  HomePageComponent,
  'home-image'
);

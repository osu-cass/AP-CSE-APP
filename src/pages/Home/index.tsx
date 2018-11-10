import React from 'react';
import { NavBar } from '../../components/NavBar';
import { TitleBar } from '../../components/TitleBar';
import homeLogo from '../../assets/images/home-page.jpg';

const importedLogo = homeLogo as string;

// cSpell:disable
export const HomePage = () => (
  <div className="content">
    <div className="element-wrapper">
      <TitleBar claimTitle={'Content Specification Explorer'} />
    </div>
    <div className="passage">
      <h1 className="passage-title">About CSE</h1>
      <div className="passage-content">
        Ipsum aut accusamus quod omnis. Ex fugit eaque aut quia dolorum quaerat. Consequuntur
        occaecati id voluptatibus illo enim. Velit eveniet consequuntur recusandae laboriosam eos
        maiores. Illo earum voluptatem et praesentium quia et. Non est et cumque ullam eveniet quas
        est molestiae. Et eveniet atque laboriosam provident et aut recusandae. Eos occaecati aut
        laboriosam facere facilis qui. Maxime et omnis ipsum et minus. Eligendi repudiandae aut
        quasi.
      </div>
      <div className="buttons">
        <button className="single-button">Navigate to a Target</button>
        <button className="single-button">Learn About the Specs</button>
      </div>
    </div>
    <img className="home-img" src={importedLogo} alt="home-pic" />
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: row;
        font-family: PT Serif;
        flex-wrap: wrap;
        justify-content: center;
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
        background-color: #006298;
        color: white;
        font-size: 15px;
        padding: 6px;
        width: 330px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid black;
        cursor: pointer;
      }
      .content {
        margin-top: 40px;
      }
      .home-img {
        height: 450px;
        width: auto;
        margin-top: 13px;
        margin-left: 10px;
      }
      .element-wrapper {
        width: 100%;
        flex-basis: 100%;
      }
    `}</style>
  </div>
);
// cSpell:enable

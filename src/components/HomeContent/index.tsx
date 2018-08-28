import React from 'react';

export const HomeContent = () =>
  <div className="content">
    <div className="passage">
      <h1 className="passage-title">About CSE</h1>
      <div className="passage-content">
        Ipsum aut accusamus quod omnis. Ex fugit eaque aut quia dolorum quaerat. Consequuntur
        occaecati id voluptatibus illo enim. Velit eveniet consequuntur recusandae laboriosam eos
        maiores. Illo earum voluptatem et praesentium quia et. Non est et cumque ullam eveniet quas
        est molestiae.
        Et eveniet atque laboriosam provident et aut recusandae. Eos occaecati aut laboriosam facere
        facilis qui. Maxime et omnis ipsum et minus. Eligendi repudiandae aut quasi.
      </div>
      <div className="buttons">
        <button className="single-button">Navigate to a Target</button>
        <button className="single-button">Learn About the Specs</button>
      </div>
    </div>
    <img
      className="home-img"
      src="https://files.slack.com/files-pri/T0BV6QQ1J-FCH9DMQ6T/kids.jpg"
      alt="home-pic"
    />
    <style jsx>{`
            .content{
                display:flex;
                flex-direction:row;
                font-family:PT Serif;
            }
            .passage-title{
                font-size: 20px;
                font-weight: bold;
            }
            .passage-content{
                width:330px;
                padding-bottom: 15px;
                border-bottom: 1px solid black;
            }
            .buttons{
                display:flex;
                flex-direction:column;
            }
            .single-button{
                margin-top: 20px;
                background-color: #006298;
                color: white;
                font-size: 15px;
                padding: 6px;
                width: 330px;
                text-align: center;
                border-radius:5px;
                border: 1px solid black;
                cursor:pointer;
            }
            .content{
                margin-top:40px;
            }
            .home-img{
                height:450px;
                width:auto;
                margin-top: 13px;
                margin-left:10px;
            }
            `}</style>
  </div>;

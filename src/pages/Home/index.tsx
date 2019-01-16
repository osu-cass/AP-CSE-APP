import React from 'react';
import homeLogo from '../../assets/images/home-page.jpg';
import { Link } from 'react-router-dom';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';
import { Colors } from '../../constants/style';
import css from 'styled-jsx/css';
import { MobileBreakSize } from '../../components/MediaQueryWrapper';

const importedLogo = homeLogo as string;
const homestyle = css`
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
  width: 330px;
  padding-bottom: 50px;
  background-color: #fff;
}
.passage-title {
  font-size: 20px;
  font-weight: bold;
}
.passage-content {
  padding-bottom: 15px;
}
.buttons {
  display: flex;
  flex-direction: column;
}

.single-button {
  margin-top: 20px;
  background-image: linear-gradient(to right, ${Colors.sbBlue} 70%, #177c9e);
  color: white;
  font-size: 15px;
  padding: 6px;
  width: 330px;
  text-align: center;
  border-radius: 5px;
  border: 0px;
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

@media (max-width: ${MobileBreakSize.maxWidth}px) {
  :global(.home-image){
    background-image: none;
    background-color:white;
  }
  .passage{
    max-width:87vw;
    padding:3px;
  }
  .passage-content {
    width: 87vw;
   }
   .single-button {
     width: 87vw;
   }
  .content {
    margin-top: 10px;
  }
}
`;
// cSpell:disable
const HomePageComponent = () => (
  <div className="content">
    <div className="element-wrapper" />
    <div className="passage">
      <h1 className="passage-title">Welcome, Educators!</h1>
      <div className="passage-content">
        How do Smarter Balanced tests assess the range of knowledge and skills important for college
        and career readiness? Use this site to learn how test items connect to academic standards.
      </div>
      <div className="buttons">
        <Link to="/explore?filter=open">
          <button className="single-button">Explore Content Specifications</button>
        </Link>
        <p>
          Find item specifications that link claims and assessment targets to the content standards.
        </p>
        <Link to="/development">
          <button className="single-button">Learn About Test Development</button>
        </Link>
        <p>
          Access assessment blueprints, accessibility guidelines, scoring rubrics, and much more.
        </p>
      </div>
    </div>
    <style jsx>{homestyle}</style>
  </div>
);
// cSpell:enable

export const HomePage = genericLayout(
  <Title>Content Specification Explorer</Title>,
  HomePageComponent,
  'home-image'
);

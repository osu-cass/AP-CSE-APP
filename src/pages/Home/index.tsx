import React, { CSSProperties } from 'react';
import homeLogo from '../../assets/images/home-page.jpg';
import { Link } from 'react-router-dom';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';
import { Colors, Styles, mediaQueries, blueGradient } from '../../constants/style';
import css from 'styled-jsx/css';

const homestyle = css`
.content {
  font-family: PT Serif;
  margin-top: 40px;
  padding: ${Styles.paddingUnit};
  background-color: ${Colors.sbWhite};
  width: 330px;
}

.single-button {
  background-image: ${blueGradient};
  color: white;
  font-size: 15px;
  padding: 6px;
  text-align: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.button-container {
  margin-top: 30px;
}

:global(.home-image) {
  background-image: url("${homeLogo}");
  background-size: cover;
  background-position: 0% 20%;
  background-repeat: no-repeat;
  height: 100%;
}

@media ${mediaQueries.mobile} {
  :global(.home-image){
    background-image: none;
    background-color: white;
  }

  .content {
    margin-top: 10px;
    width: auto;
    padding: 0;
  }
}
`;

const linkStyle: CSSProperties = {
  textDecoration: 'none'
};

// cSpell:disable
const HomePageComponent = () => (
  <div className="content">
    <h2 className="passage-title">Welcome, Educators!</h2>
    <p>
      How do Smarter Balanced tests assess the range of knowledge and skills important for college
      and career readiness? Use this site to learn how test items connect to academic standards.
    </p>
    <div className="button-container">
      <Link to="/explore?filter=open" style={linkStyle}>
        <div className="single-button">Explore Content Specifications</div>
      </Link>
      <p>
        Find item specifications that link claims and assessment targets to the content standards.
      </p>
    </div>
    <div className="button-container">
      <Link to="/development" style={linkStyle}>
        <div className="single-button">Learn About Test Development</div>
      </Link>
      <p>Access assessment blueprints, accessibility guidelines, scoring rubrics, and much more.</p>
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

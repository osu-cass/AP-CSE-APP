import { Colors, Styles, blueGradientBgImg } from '../../constants';
import css from 'styled-jsx/css';
export const Styling = css`
  button {
    display: flex;
    flex-direction: column;
    width: 225px;
    margin-left: 15px;
    margin-right: 10px;
    height: 40px;
    text-align: center;
    text-align: -webkit-center;
    border: solid;
    line-height: 30px;
    border-color: ${Colors.sbGray};
    border-radius: 4px;
    background-color: #fff;
    font-family: ${Styles.sbSans};
    font-size: 16px;
    color: ${Colors.sbGrayDarker};
    letter-spacing: ${Styles.sbLetterSpacing};
  }
  .checked {
    background-image: ${blueGradientBgImg.backgroundImage};
    color: ${Colors.sbGrayLighter};
  }
  #entire-target-btn {
    margin-bottom: 12px;
  }
  #continue-btn {
    margin-top: 50px;
    margin-left: 40px;
    border: none;
    height: 30px;
    line-height: 26px;
    width: 175px;
    background-image: ${blueGradientBgImg.backgroundImage};
    color: ${Colors.sbGrayLighter};
  }
  #scrollable-btn-container {
    overflow-y: scroll;
    margin-right: -15px;
    height: 200px;
  }
  #title-container {
    text-align: center;
    font-family: ${Styles.sbSans};
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.sbGray};
    letter-spacing: ${Styles.sbLetterSpacing};
    margin-bottom: 5px;
    margin-top: -10px;
  }
  .hidden {
    display: none;
  }
`;

export const pageStyling = css`
  button {
    display: flex;
    flex-direction: column;
    width: 225px;
    margin-left: 15px;
    margin-right: 10px;
    height: 40px;
    text-align: center;
    text-align: -webkit-center;
    border: solid;
    line-height: 30px;
    border-color: ${Colors.sbGray};
    border-radius: 4px;
    background-color: #fff;
    font-family: ${Styles.sbSans};
    font-size: 16px;
    color: ${Colors.sbGrayDarker};
    letter-spacing: ${Styles.sbLetterSpacing};
  }
  .hidden {
    display: none;
  }
  div {
    font-family: ${Styles.sbSans};
    text-align: center;
    letter-spacing: ${Styles.sbLetterSpacing};
    color: ${Colors.sbGray};
  }
  #selections-title {
    font-size: 20px;
    font-weight: bold;
    margin-right: 35px;
    margin-left: 35px;
    margin-bottom: 5px;
    margin-top: -10px;
  }
  #selections-list {
    overflow-y: auto;
    height: 200px;
    margin-left: -20px;
    text-align: left;
    font-size: 16px;
  }
  #pdf-page-count {
    font-size: 14px;
  }
  #confirm-back-btn-container button {
    width: 100px;
    background-image: ${blueGradientBgImg.backgroundImage};
    margin-top: 10px;
    display: inline-block;
    color: ${Colors.sbGrayLighter};
  }
`;

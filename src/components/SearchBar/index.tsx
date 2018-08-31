import React from 'react';
import { Search } from 'react-feather';
import { Colors } from '../../constants';

export const SearchBar = (): JSX.Element =>
  <div className="search-bar">
    <input className="field" type="search" onClick={() => 'placeholder'} />
    <button className="button" type="submit">
      <Search color={Colors.sbWhite} size={16} />
    </button>
    <style jsx>{`
              .search-bar {
                  display: flex;
                  min-height: 2em;
                  position: relative;
              }
              .button {
                  align-items: center;
                  background-color: ${Colors.sbGray};
                  border-radius: 0 5px 5px 0;
                  border-style: none;
                  display: flex;
                  height: auto;
                  justify-content: center;
                  min-height: 2em;
                  position: relative;
              }
              .field {
                  border-color: ${Colors.sbGray};
                  border-radius: 5px 0 0 5px;
                  border-style: solid;
                  color: ${Colors.sbGray};
                  height: auto;
                  min-height: 2em;
                  padding: 0 0.5em;
              }
          `}</style>
  </div>;

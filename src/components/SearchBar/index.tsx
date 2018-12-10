import React from 'react';
import { Search } from 'react-feather';
import { Colors, mediaQueries } from '../../constants';

export interface SearchBarProps {
  initialText?: string;
  onSearch: (search: string) => void;
}

export interface SearchBarState {
  text: string;
}

/**
 * Search bar that updates parent on search pressed with the current search string
 *
 * @export
 * @class SearchBar
 * @extends {React.Component<SearchBarProps, SearchBarState>}
 */
export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      text: props.initialText || 'search...'
    };
  }

  onTextUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  onEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.text);
    }
  };

  onClicked = () => {
    if (this.state.text === 'search...') {
      this.setState({ text: '' });
    }
  };
  onLoseFocus = () => {
    if (this.state.text === '') {
      this.setState({ text: 'search...' });
    }
  };

  render() {
    return (
      <div className="search-bar">
        <input
          aria-label="Search"
          className="field"
          type="search"
          value={this.state.text}
          onChange={this.onTextUpdated}
          onKeyPress={this.onEnterPressed}
          onClick={this.onClicked}
          onBlur={this.onLoseFocus}
        />
        <button
          aria-label="Submit"
          className="button"
          type="submit"
          onClick={() => {
            this.props.onSearch(this.state.text);
          }}
        >
          <Search color={Colors.sbWhite} size={16} />
        </button>
        <style jsx>{`
          .search-bar {
            display: flex;
            min-height: 2em;
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
          }
          .field {
            border-color: ${Colors.sbGray};
            border-radius: 5px 0 0 5px;
            border-style: solid;
            color: ${Colors.sbGray};
            height: auto;
            min-height: 2em;
            padding: 0 0.5em;
            flex-grow: 1;
            font-size: 14px;
          }
          @media ${mediaQueries.tabletAndMobile} {
            .field {
              width: 0; //needed so browser will shrink it past default size
            }
          }
        `}</style>
      </div>
    );
  }
}

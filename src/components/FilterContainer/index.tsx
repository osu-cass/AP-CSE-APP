import React, { KeyboardEvent } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'react-feather';
import { Colors } from '../../constants';

export interface FilterContianerProps {
  expanded?: boolean;
}

export interface FilterContianerState {
  expanded: boolean;
}

/**
 * React component for filter container, with expandable header
 *
 * @export
 * @class FilterContianer
 * @extends {React.Component<FilterContianerProps, FilterContianerState>}
 */
export class FilterContianer extends React.Component<FilterContianerProps, FilterContianerState> {
  constructor(props: FilterContianerProps) {
    super(props);

    this.state = {
      expanded: props.expanded || false
    };
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      this.toggleExpanded();
    }
  };

  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    const chevron = expanded ? <ChevronUp /> : <ChevronDown />;

    return (
      <React.Fragment>
        <div
          className="header"
          onClick={this.toggleExpanded}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleEnterPress}
        >
          <Filter /> Filter <span className="chevron">{chevron}</span>
        </div>
        {expanded ? <div className="filter-container">{children}</div> : undefined}
        <style jsx>{`
          .filter-container {
            background-color: #eee;
            border-top: 1px solid ${Colors.sbGray};
            border-bottom: 1px solid ${Colors.sbGray};
          }
          .chevron {
            color: gray;
          }
          .header {
            cursor: pointer;
            font-size: 2em;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

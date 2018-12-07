import React, { KeyboardEvent } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'react-feather';
import { Colors, Styles } from '../../constants';

export interface FilterContainerProps {
  expanded?: boolean;
}

export interface FilterContainerState {
  expanded: boolean;
}

/**
 * React component for filter container, with expandable header
 *
 * @export
 * @class FilterContianer
 * @extends {React.Component<FilterContainerProps, FilterContainerState>}
 */
export class FilterContainer extends React.Component<FilterContainerProps, FilterContainerState> {
  constructor(props: FilterContainerProps) {
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
        <h2
          className="header"
          onClick={this.toggleExpanded}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleEnterPress}
        >
          <Filter />
          &nbsp;Filter&nbsp;
          <span className="chevron">{chevron}</span>
        </h2>

        {expanded ? <div className="filter-container">{children}</div> : undefined}
        <style jsx>{`
          .filter-container {
            background-color: #eee;
            border-bottom: 1px solid ${Colors.sbGray};
            padding: ${Styles.paddingUnit};
          }
          .chevron {
            color: gray;
            display: flex;
            align-items: center;
          }
          h2 {
            font-weight: normal;
            margin: 0;
            border-bottom: 1px solid ${Colors.sbGray};
            display: flex;
            align-items: center;
          }
          .header {
            cursor: pointer;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

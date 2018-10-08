import React, { Component } from 'react';
import { FilterItemProps, FilterItem } from '../FilterItem';

export interface FilterItemListState {
  items: FilterItemProps[];
}

export interface FilterItemListProps {
  allItems: FilterItemProps[];
}

/**
 * Renders a list of results from the search/filter process
 * @export
 * @class {FilterItemList}
 * @param {FilterItemListProps} allItems
 */
export class FilterItemList extends Component<FilterItemListProps, FilterItemListState> {
  constructor(props: FilterItemListProps) {
    super(props);
    this.state = { items: this.props.allItems };
  }

  render() {
    const listItems = this.props.allItems.map(t => <FilterItem {...t} />);

    return (
      <React.Fragment>
        <ul className="list" role="menu">
          {listItems}
        </ul>
      </React.Fragment>
    );
  }
}

import React from 'react';

export interface IAccordionProps {
  title: string;
  content?: string;
  titleClass?: string;
  contentClass?: string;
}

export interface IAccordionState {
  expanded: boolean;
}

export class Accordion extends React.Component<IAccordionProps, IAccordionState> {
  constructor(props: IAccordionProps) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded });

  render() {
    return <div />;
  }
}

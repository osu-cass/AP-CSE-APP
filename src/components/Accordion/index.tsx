import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';

interface AccordionState {
  expanded: boolean;
}

interface AccordionProps {
  title: React.ReactNode;
  expanded?: boolean;
}

/**
 * Accordion component which creates a expandable header which
 * optionally displays the child components
 *
 * @class Accordion
 * @extends {React.Component<AccordionProps, AccordionState>}
 */
export class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      expanded: props.expanded || false
    };
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      this.toggleExpanded();
    }
  };

  render() {
    const { expanded } = this.state;
    const chevron = expanded ? (
      <ChevronUp size={20} color="gray" />
    ) : (
      <ChevronDown size={20} color="gray" />
    );

    return (
      <React.Fragment>
        <div
          className="title"
          onClick={this.toggleExpanded}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleEnterPress}
        >
          {this.props.title}&nbsp;{chevron}
        </div>
        <div className={expanded ? 'content' : 'hidden'}>{this.props.children}</div>
        <style jsx>{`
          .hidden {
            display: none;
          }
          .title {
            display: flex;
            align-items: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

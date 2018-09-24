import React, { KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export interface IAccordionProps {
  title: string;
  content?: React.ReactNode;
  titleClass?: string;
  containerClass?: string;
  expanded?: boolean;
  indentBody?: boolean;
}

export interface IAccordionState {
  expanded: boolean;
}

export class Accordion extends React.Component<IAccordionProps, IAccordionState> {
  constructor(props: IAccordionProps) {
    super(props);

    this.state = {
      expanded: props.expanded || false
    };
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded });

  handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      this.toggleExpanded();
    }
  };

  render() {
    const { expanded } = this.state;
    const { children, content, title, titleClass, containerClass, indentBody } = this.props;
    let contents: React.ReactNode;
    if (expanded) {
      contents = indentBody ? (
        <div style={{ marginLeft: '1em' }}>{children || content}</div>
      ) : (
        children || content
      );
    }

    return (
      <div className={containerClass}>
        <div
          className={`title ${titleClass}`}
          onClick={this.toggleExpanded}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleEnterPress}
        >
          <span className="expanded-icon">
            <FontAwesomeIcon icon={expanded ? faAngleDown : faAngleRight} />
          </span>
          {title}
        </div>
        {contents}
        <style jsx>{`
          .expanded-icon {
            display: inline-block;
            width: 1em;
            color: gray;
          }
          .title {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

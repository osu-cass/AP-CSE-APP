import React, { ReactElement } from 'react';
import { Colors, Styles } from '../../../constants/style';
import { ChevronDown, ChevronUp } from 'react-feather';
import { SubItemProps } from '../SubItem';
import { Link } from 'react-scroll';
import { scrollPageTo, renderLink } from '../../../utilities/scroller';

/**
 * Properties for Item
 * @export
 * @interface ContentNavProps
 */
export interface ItemProps extends SubItemProps {
  expanded?: boolean;
  subItems: SubItemProps[];
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  contentKey?: string;
}

export interface ChevronProps {
  expanded?: boolean;
  expand?: (e: React.MouseEvent<SVGElement>, n: string) => void;
  itemName: string;
}

export const Chevron: React.SFC<ChevronProps> = ({ expanded, expand, itemName }) => {
  if (expanded) {
    return (
      <ChevronUp
        onClick={e => {
          if (expand) expand(e, itemName);
        }}
        size={20}
      />
    );
  }

  return (
    <ChevronDown
      onClick={e => {
        if (expand) expand(e, itemName);
      }}
      size={20}
    />
  );
};

/**
 * Renders a single item within a content navigator.
 * @export
 * @function {Item}
 * @param {string} name
 * @param {boolean} [active]
 * @param {boolean} [expanded]
 * @param {(e: React.MouseEvent<SVGElement>, n: string) => void} [expand]
 * @param {(n: string) => void} [activate]
 * @param {JSX.Element[]<LeftMouse> | JSX.Element} [children]
 */
export const Item: React.SFC<ItemProps> = ({
  name,
  active,
  activate,
  expanded,
  expand,
  referenceContainer,
  scrollOffset,
  children
}) => {
  return (
    <li
      key={name}
      onClick={() => {
        scrollPageTo(name, scrollOffset || -225, referenceContainer);
        if (activate) activate(name);
      }}
      role="menuitem"
    >
      {renderLink(referenceContainer, name, activate)}
      <div className={active ? 'active' : ''}>
        <div className="chevron">
          {children && <Chevron expanded={expanded} expand={expand} itemName={name} />}
        </div>
        <div className="item-content">{name}</div>
      </div>
      <ul className={`sub-list ${expanded ? 'expanded' : ''}`}>{children}</ul>
      <style jsx>{`
        * {
          font-family: ${Styles.sbSerif};
        }
        li {
          position: relative;
          display: flex;
          flex-direction: column;
          font-size: ${Styles.font};
          text-indent: 0.25em;
          z-index: 0;
          cursor: pointer;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
          width: auto;
        }
        .sub-list :not(.expanded) {
          display: none;
          height: 0;
          overflow: hidden;
        }
        .item-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin: 0.5em 0;
        }
        .chevron {
          display: flex;
          margin-top: 5px;
          margin-left: -30px;
          align-items: center;
          text-indent: 0;
          float: left;
          color: ${Colors.sbGrayDarker};
          display: inline;
        }
        .active {
          color: ${Colors.sbBlue};
          font-weight: bold;
        }
      `}</style>
    </li>
  );
};

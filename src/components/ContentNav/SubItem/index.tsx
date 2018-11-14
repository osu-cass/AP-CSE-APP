import React from 'react';
import { Colors, Styles } from '../../../constants';
import { Link } from 'react-scroll';
import { scrollPageTo, renderLink } from '../../../utilities/scroller';

/**
 * Properties for SubItem
 * @export
 * @interface ContentNavProps
 */
export interface SubItemProps {
  active?: boolean;
  name: string;
  referenceContainer?: string;
  activate?: (n: string) => void;
  scrollOffset?: number;
}

/**
 * Renders a single subitem within a content navigator item.
 * @export
 * @function {SubItem}
 * @param {string} name
 * @param {boolean} [active]
 * @param {(n: string) => void} [activate]
 */
export const SubItem: React.SFC<SubItemProps> = ({
  name,
  active,
  activate,
  referenceContainer,
  scrollOffset
}) => {
  const subName = name.split('-')[1];

  return (
    <li
      className={`${active ? 'active' : ''}`}
      onClick={e => {
        if (activate) activate(name);
        e.stopPropagation();
        scrollPageTo(name, scrollOffset || -225, referenceContainer);
      }}
      role="menuitem"
    >
      {renderLink(referenceContainer, name, activate)}
      <p>{subName}</p>
      <style jsx>{`
        * {
          font-family: ${Styles.sbSerif};
        }
        li {
          display: flex;
          align-items: center;
          color: ${Colors.sbGray};
          font-size: ${Styles.font};
          text-indent: 1em;
          height: 1.75em;
        }
        p {
          margin-right: 2em;
        }
        .active {
          color: ${Colors.sbBlue};
        }
      `}</style>
    </li>
  );
};

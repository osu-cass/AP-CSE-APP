import React from 'react';

import { Colors, Styles } from '../../../constants/style';
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
          align-items: left;
          text-align:left;
          color: black;
          font-size: ${Styles.font};
        }
        p {
          margin-left: 1.6em;
        }
        .active {
          color: ${Colors.sbBlue};
        }
      `}</style>
    </li>
  );
};

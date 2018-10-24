import React from 'react';
import { Colors, Styles } from '../../../constants';
import { ItemProps } from '../Item';

/**
 * Properties for SubItem
 * @export
 * @interface ContentNavProps
 */
export interface SubItemProps {
  active?: boolean;
  name: string;
  activate?: (e: React.MouseEvent<HTMLLIElement>, n: string) => void;
}

/**
 * Renders a single subitem within a content navigator item.
 * @export
 * @function {SubItem}
 * @param {string} name
 * @param {boolean} [active]
 * @param {(e: React.MouseEvent<HTMLLIElement>, n: string) => void} [activate]
 */
export const SubItem: React.SFC<SubItemProps> = ({ name, active, activate }) => {
  const subName = name.split('-')[1];

  return (
    <li
      className={`${active ? 'active' : ''}`}
      onClick={e => {
        if (activate) activate(e, name);
      }}
      role="menuitem"
    >
      <p>{subName}</p>
      <style jsx>{`
        * {
          font-family: ${Styles.sbSans};
        }
        li {
          box-sizing: border-box;
          border-left: 3px solid ${Colors.sbWhite};
          display: flex;
          align-items: center;
          color: ${Colors.sbBlue};
          font-size: ${Styles.fontLarger};
          font-weight: normal;
          text-indent: 1em;
          height: 3em;
        }
        li :first-child {
          border-top: 1px solid #000;
        }
        p {
          margin-right: 2em;
        }
        .active {
          box-sizing: border-box;
          border-left: 3px solid ${Colors.sbBlue};
          font-weight: bold;
        }
        :not(.active) {
          background-color: ${Colors.sbWhite};
        }
      `}</style>
    </li>
  );
};

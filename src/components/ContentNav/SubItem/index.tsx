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
export const SubItem = ({ name, active, activate }: SubItemProps) => {
  return (
    <li
      className={`${active ? 'active' : ''}`}
      onClick={e => {
        if (activate) activate(e, name);
      }}
      role="menuitem"
    >
      <p>{name}</p>
      <style jsx>{`
        * {
          font-family: ${Styles.sbSans};
        }
        li {
          box-sizing: border-box;
          border-left: 3px solid ${Colors.sbWhite};
          display: flex;
          align-items: center;
          color: ${Colors.sbBlueLighter};
          font-size: 16px;
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
          border-left: 3px solid ${Colors.sbBlueLighter};
          font-weight: bold;
        }
        :not(.active) {
          background-color: ${Colors.sbWhite};
        }
      `}</style>
    </li>
  );
};

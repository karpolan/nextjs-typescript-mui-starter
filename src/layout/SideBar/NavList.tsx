import List from '@mui/material/List';
import { LinkToPage } from '../../utils/type';
import { FunctionComponent } from 'react';
import SideBarNavItem from './NavItem';

interface Props {
  items: Array<LinkToPage>;
  showIcons?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Renders list of Navigation Items inside SideBar
 * @component SideBarNavList
 * @param {array} items - list of objects to render as navigation items
 * @param {boolean} [showIcons] - icons in navigation items are visible when true
 * @param {func} [onAfterLinkClick] - optional callback called when some navigation item was clicked
 */
const SideBarNavList: FunctionComponent<Props> = ({ items, showIcons, onClick, ...restOfProps }) => {
  return (
    <List component="nav" {...restOfProps}>
      {items.map(({ icon, path, title }) => (
        <SideBarNavItem
          key={`${title}-${path}`}
          icon={showIcons ? icon : undefined}
          path={path}
          title={title}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

export default SideBarNavList;
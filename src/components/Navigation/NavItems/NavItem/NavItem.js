import React from 'react';
import { NavItemDiv } from './NavItem_SCs';

const navItem = (props) => (
	<NavItemDiv itemType={props.itemType}>
		<a href={props.link}>
			{props.children}
		</a>
	</NavItemDiv>
);

export default navItem;
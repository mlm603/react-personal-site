import React from 'react';
import { NavItemsDiv } from './NavItems_SCs';
import NavItem from './NavItem/NavItem';

const navItems = () => (
	<NavItemsDiv>
		<NavItem link="/" itemType="title">Meghan Maloy</NavItem>
		<NavItem link="/#about">About</NavItem>
		<NavItem link="/#portfolio">Portfolio</NavItem>
	</NavItemsDiv>
);

export default navItems;
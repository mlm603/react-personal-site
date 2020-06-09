import React from 'react';

import { ToolbarDiv, NavDiv, MenuDiv } from './Toolbar_SCs';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
	<ToolbarDiv>
		<MenuDiv onClick={props.menuClick}>
			<div/>
			<div/>
			<div/>
		</MenuDiv>
		<NavDiv>
			<NavItems/>
		</NavDiv>
	</ToolbarDiv>
);

export default toolbar;
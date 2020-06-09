import React from 'react';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { SideDrawer } from  './SideDrawer_SCs';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>
			<SideDrawer show={props.open} onClick={props.closed}>
				<nav>
					<NavItems />
				</nav>
			</SideDrawer>
		</Aux>
	);
};

export default sideDrawer;
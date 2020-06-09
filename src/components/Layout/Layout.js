import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Content, GlobalStyle } from './Layout_SCs'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	};

	menuClickHandler = () => {
		this.setState({showSideDrawer: true});
	};


	render() {
		return (
			<Aux>
				<GlobalStyle />
				<Toolbar menuClick={this.menuClickHandler}/>
				<SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
				<Content>
					{this.props.children}
				</Content>
			</Aux>
		)
	}
};

export default Layout;
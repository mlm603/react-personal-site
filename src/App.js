import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomepageLayout from './components/HomepageLayout/HomepageLayout';
import NeighborhoodComparisonLayout from './components/NeighborhoodComparisonLayout/NeighborhoodComparisonLayout';

class App extends Component {
	render() {
	    return (
			<BrowserRouter>
			    <Layout>
			    	<Switch>
			    		<Route path="/" component={HomepageLayout} exact/>
			    		<Route path="/neighborhood_comparison" component={NeighborhoodComparisonLayout}/>
			    	</Switch>
			    </Layout>
			</BrowserRouter>
	    );
	}
}

export default App;

import React, { Component } from 'react';
import { FiltersDiv, ChartDiv, CityFlagDiv, NeighborhoodLabel, CityTitle, InputDiv, DescriptionText } from './NeighborhoodComparisonLayout_SCs';
import Aux from '../../hoc/Aux';
import Jumbotron from '../Jumbotron/Jumbotron';
// import * as script from './app.js';

class neighborhoodComparison extends Component{
	componentDidMount(){
		// import app.js after mounting because the script requires some HTML elements to exist
		import('./app.js');
	}

	render(){
		return (
			<Aux>
				<Jumbotron section_title="Chicago vs NYC Comparison" title_position="center">
					<DescriptionText className="bigScreen"> Hover over a neighborhood in one city to see its equivalent in the other. Equivalencies are based on random forum discussions and are not available for most neighborhoods. Eventually, I want to define equivalencies based on crime stats/demographics/etc. </DescriptionText>
					<DescriptionText className="smallScreen"> Pick the city you're more familiar with and select a neighborhood that you're interested in from that city. The comparable neighborhood in the other city will appear in the map. Equivalencies are based on random forum discussions and are not available for most neighborhoods. Eventually, I want to define equivalencies based on crime stats/demographics/etc. </DescriptionText>
				</Jumbotron>
			    <FiltersDiv>
			      <p> Select a City </p>
			      <div className="select_c">
			        <InputDiv type="radio" name="city" value="chi" id="chi_radio" defaultChecked />
			        <label htmlFor="chi_radio">
			          <CityFlagDiv>
			            <h2>Chicago</h2>
			          </CityFlagDiv>
			        </label>     
			        <InputDiv type="radio" name="city" value="nyc" id="nyc_radio" />   
			        <label htmlFor="nyc_radio">
			          <CityFlagDiv>
			            <h2>NYC</h2>
			          </CityFlagDiv>
			        </label>    
			      </div>
			      <p> Select a neighborhood to see its match in the map</p>
			      <div className="select_n">
			        <select name="neighborhood" id="neighborhood"/>
			      </div>
			      <br/>
			    </FiltersDiv>
			    <ChartDiv id="chicago_chart" className="inactive_chart">
			      <CityTitle>Chicago</CityTitle>
			      <NeighborhoodLabel id="chi-neighborhood" />
			      <div id="chicago"></div>
			    </ChartDiv>
			    <ChartDiv id="nyc_chart">
			      <CityTitle>NYC</CityTitle>
			      <NeighborhoodLabel id="nyc-neighborhood" />
			      <div id="nyc"></div>
			    </ChartDiv>
			</Aux>
		);
	}
}

export default neighborhoodComparison;
import React from 'react';
import Aux from '../../hoc/Aux';
import Jumbotron from '../Jumbotron/Jumbotron';
import { GithubIcon, LinkedInIcon, EmailIcon } from '../UI/Icon/Icon';
import { SiteTitle, IconsDiv, NPMcontact, BodyText, AboutMeImg, ContentContainer, ProjectTileDiv, ImgDiv } from './HomepageLayout_SCs';
import profile_img from '../../assets/images/profile.png';
import js_img from '../../assets/images/js_logo.png';
import microphone_img from '../../assets/images/microphone_logo.png';
import dwight_img from '../../assets/images/dwight_icon.png';
import location_img from '../../assets/images/location_icon.png';

const ProjectTile = (props) => {
	let link = (props.link_to ? props.link_to : "undefined");
	var target = (link.charAt(0) === "/" ? "" : "_blank");

	return (
		<ProjectTileDiv youtube_link={props.youtube_link}>
			<div>
			{
				props.youtube_link ?
				null
				: (
					<ImgDiv>
						<img src={props.img_path} alt={props.title}/>
					</ImgDiv>
				)
			}
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			{
				props.youtube_link ?
				(
					<iframe title={props.title} src={props.youtube_link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>

				)
				: <a href={props.link_to} target={target}/>
			}
			</div>
		</ProjectTileDiv>
	);
};

const homepage = (props) => {
	return (
		<Aux>
			<Jumbotron>
				<link href="https://fonts.googleapis.com/css?family=Cabin Sketch" rel="stylesheet" type="text/css" />
				{props.children}
				<SiteTitle> Meghan Maloy </SiteTitle>
				<NPMcontact>
					$ npm install -g meghan_maloy
				</NPMcontact>
				<IconsDiv>
					<EmailIcon/>
					<LinkedInIcon/>
					<GithubIcon/>
				</IconsDiv>
			</Jumbotron>
			<Jumbotron section_title="About Me" id="about">
				<ContentContainer>
					<BodyText>
						CAT OWNER. DOUGHNUT ENTHUSIAST. OCCASIONAL PICNICKER.
						<br/><br/>
						... also a Senior Data Analyst at Datadog. I started my career pushing Excel to its limits with VBA, and have moved on to reporting in BI tools like Looker and Metabase (but Excel will always hold a special place in my heart). I've messed around with web development as a hobby for a few years and am particularly excited to continue practicing with D3. 
						<br/><br/>
						I love data! I love reading the cool data journalism that The Pudding and FiveThirtyEight publish. I love twisting data to support positions that are clearly incorrect. I love making assumptions and then finding out I'm wrong when I check the numbers. I love figuring out weird proxy metrics when a straightforward data source isn't available.
					</BodyText>
					<AboutMeImg src={profile_img}/>
				</ContentContainer>
			</Jumbotron>
			<Jumbotron section_title="Portfolio" id="portfolio">
				<ContentContainer>
					<ProjectTile
						title="Looker JOIN 2019 Presentation"
						description="Promoting Data-Driven Product Design"
						youtube_link="https://www.youtube.com/embed/wG2rHtQ-xY8"
						css_grid_width="12"
					/>
					<ProjectTile
						img_path={microphone_img}
						title="Cellar Scraper"
						description="Full-stack project to report stats on comedians' performances at the Comedy Cellar. Nightly Python job scrapes the Comedy Cellar site and stores data in a Postgres DB hosted in Heroku. Flask-based site allows users to see some high-level stats and sign up for email alerts."
						link_to="http://www.cellarscraper.com/"
					/>
					<ProjectTile
						img_path={dwight_img}
						title="Schrute Reports"
						description="Excel workbook that uses macros to create user friendly report navigation, with stats on bears, beets, and Battlestar Galactica"
						link_to="https://github.com/mlm603/mlm603.github.io/raw/master/Excel%20files/Bears%20Beets%20Battlestar%20Galactica.xlsm"
					/>
					<ProjectTile
						img_path={location_img}
						title="Neighborhood Comparison"
						description='Proof of concept showing comparable neighborhoods between Chicago and NYC. "Comparable" is based on arbitrary forum discussions.'
						link_to="/neighborhood_comparison"
					/>
					<ProjectTile
						img_path={js_img}
						title="FreeCodeCamp JS + D3 Projects"
						description="Codepen collections of Javascript and D3 projects completed for FreeCodeCamp curriculum."
						link_to="https://codepen.io/mmaloy/collections/"
					/>
				</ContentContainer>
			</Jumbotron>
		</Aux>
	);
};

export default homepage;
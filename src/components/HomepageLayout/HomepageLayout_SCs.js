import styled from 'styled-components';

const SiteTitle = styled.h2`
    font-family: Cabin Sketch;
	font-size: 4em;
	color: white;
	text-shadow: -5px 0 black, 0 5px black, 5px 0 black, 0 -5px black;
	font-style: bold;
	font-weight: 500;
	line-height: 1.1;
	padding-top: .5em;
	margin-top: -25px;
	margin-bottom: 0;
 `;

const NPMcontact = styled.div`
	font-family: Monaco;
	font-size: 1em;
	color: white;
	background-color: rgb(51,51,51);
	display: inline-block;
	padding: .5em;
	border-radius: 10px;
	margin-bottom: 1em;
	margin-top: 1em;
 `;

const IconsDiv = styled.div`
	width: 100%;
	text-align: center;
 `;

 const BodyText = styled.p`
	text-align: left;
	margin: 0;
	grid-column: span 8;
	@media (max-width: 1000px){
        grid-column: span 12;
    }
 `;

const AboutMeImg = styled.img`
	align-self: center;
	justify-self: center;
	grid-column: span 4;
	border-radius: 50%;
	max-height: 300px;
	width: auto;
	@media (max-width: 1000px){
        grid-column: span 12;
        margin-top: 30px;
    }
 `;

const ContentContainer = styled.div`
 	display: grid;
 	padding: 30px;
 	grid-template-columns: repeat(12, 1fr);
 `;

const ProjectTileDiv = styled.div`
	display: grid;
 	grid-column: ${props => props.youtube_link ? "span 12" : "span 6"};
   	background-color: rgba(51,51,51,0.15);
   	min-height: ${props => props.youtube_link ? "auto" : "300px"};
   	margin: 10px;
   	position: relative;

   	a {
   		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
   	}

    img {
		display: inline;
		margin: 0 auto;
		position: absolute;
		height: 60%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		vertical-align: center;
    }

    iframe {
    	margin-bottom: 30px;
    	width: 560px;
    	height: 315px;
    }

    h2 {
    	margin: 15px 20px 20px 20px;
    }

    p {
    	margin: 0px 20px 20px 20px;
    }

    @media (max-width: 1000px){
        grid-column: span 12;
    }

    @media (max-width: 800px){
        grid-column: span 12;

        iframe {
	    	margin-bottom: 30px;
	    	width: auto;
	    	height: auto;
	    	max-height: 315px;
	    	max-width: 90%;
	    }
    }
 `;

const ImgDiv = styled.div`
	display: inline-block;
	width: 80px;
    height: 80px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background-color: white;
    justify-self: center;
    align-self: center;
    margin: 25px 20px 10px 20px;
`;

export { SiteTitle, IconsDiv, NPMcontact, BodyText, AboutMeImg, ContentContainer, ProjectTileDiv, ImgDiv };
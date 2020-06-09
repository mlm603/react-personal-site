import React from 'react';
import { JumbotronDiv, TitleText } from  './Jumbotron_SCs';

const jumbotron = (props) => {
	return (
		<JumbotronDiv id={props.id}>
			{
				props.section_title ?
				(
					<TitleText position={props.title_position}>
						{props.section_title}
					</TitleText>
				)
				: null
			}
			{props.children}
		</JumbotronDiv>
	);
};

export default jumbotron;
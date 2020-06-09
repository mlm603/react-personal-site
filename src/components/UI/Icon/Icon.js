import React from 'react';

import { IconDiv } from './Icon_SCs';
import github_logo from '../../../assets/images/github_logo.png';
import linkedin_logo from '../../../assets/images/linkedin_logo.png';
import email_logo from '../../../assets/images/email_logo.png';

const Icon = (props) => (
	<a href={props.url} target="_blank">
		<IconDiv img_path={props.img_path}/>
	</a>
);

const GithubIcon = (props) => (
	<a href="https://github.com/mlm603" target="_blank" rel="noopener noreferrer">
		<IconDiv img_path={github_logo}/>
	</a>
);

const LinkedInIcon = (props) => (
	<a href="https://www.linkedin.com/pub/meghan-maloy/63/164/9a1" target="_blank" rel="noopener noreferrer">
		<IconDiv img_path={linkedin_logo}/>
	</a>
);

const EmailIcon = (props) => (
	<a href="https://mail.google.com/mail?view=cm&tf=0&to=meghanmaloy@gmail.com" target="_blank" rel="noopener noreferrer">
		<IconDiv img_path={email_logo}/>
	</a>
);

export { Icon,  GithubIcon, LinkedInIcon, EmailIcon };
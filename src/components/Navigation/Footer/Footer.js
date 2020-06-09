import React from 'react';

import { Footer_div } from './Footer_SCs';

const footer = (props) => (
	<Footer_div>
		{props.children}
	</Footer_div>
);

export default footer;
import React from 'react';

import { BackdropDiv } from './Backdrop_SCs';

const Backdrop = (props) => (
	props.show 
	? <BackdropDiv onClick={props.clicked} /> 
	: null
);

export default Backdrop;
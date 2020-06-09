import styled from 'styled-components';

const IconDiv = styled.div`
   width: 40px;
   height: 40px;
   background-image: ${props => `url(${props.img_path})`};
   background-size: cover;
   display: inline-block;
   margin: 10px;
 `;

 export { IconDiv };
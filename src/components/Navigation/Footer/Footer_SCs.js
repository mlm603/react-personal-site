import styled from 'styled-components';

const Footer_div = styled.header`
    height: ${props => props.isNav ? "100%" : "56px"};
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
 `;

export { Footer_div };
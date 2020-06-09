import styled from 'styled-components';

const JumbotronDiv = styled.div`
    background-color: rgb(175, 200, 200);
    width: 80%;
    border-radius: 10px;
    margin: auto auto 20px auto;
    max-width: 900px;
 `;

const TitleText = styled.h2`
    color: white;
    font-size: 2em;
    text-align: ${props => props.position ? props.position : "left"};
    padding: 30px 30px 0px 30px;
    margin: 0;
 `;

export { JumbotronDiv, TitleText };
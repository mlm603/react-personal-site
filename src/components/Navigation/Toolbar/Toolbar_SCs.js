import styled from 'styled-components';

const ToolbarDiv = styled.header`
    height: ${props => props.isNav ? "100%" : "56px"};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
 `;

const NavDiv = styled.nav`
    @media (max-width: 500px){
        display: none;
    }
 `;

const MenuDiv = styled.nav`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    & div {
        width: 90%;
        height: 3px;
        background-color: white;
    }

    @media (min-width: 500px){
        display: none;
    }
 `;

export { ToolbarDiv, NavDiv, MenuDiv };
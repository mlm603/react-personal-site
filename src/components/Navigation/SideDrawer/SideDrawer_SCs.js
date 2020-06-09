import styled from 'styled-components';

const SideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: black;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px){
        display: none;
    }

    // hides SideDrawer when it is supposed to be closed
    transform: ${props => props.show ? "translateX(0)" : "translateX(-100%)"}
 `;

export { SideDrawer };
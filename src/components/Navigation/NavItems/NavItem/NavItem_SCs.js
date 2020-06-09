import styled from 'styled-components';

const NavItemDiv = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;

    @media (min-width: 500px){
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }

    && a {
    	color: ${props => 
                    props.itemType === "title" ? "rgb(175, 200, 200)" 
                    : "white"
                };
    	text-decoration: none;
    	width: 100%;
    	box-sizing: border-box;
    	display: block;

        @media (min-width: 500px){
            color: ${props => 
                    props.itemType === "title" ? "rgb(175, 200, 200)" 
                    : "white"
                };
            height: 100%;
            padding: 16px 10px;
            border-bottom: ${props => 
                    props.itemType === "title" ? "4px" 
                    : "4px solid transparent"
                };
        }
    }

    && a:hover
    , a:active
    , a.active {
    	color: ${props => 
                    props.itemType === "title" ? "rgb(175, 200, 200)" 
                    : "white"
                };
        @media (min-width: 500px){
            background-color: black;
            border-bottom: ${props => 
                    props.itemType === "title" ? "none" 
                    : "6px solid white"
                }; 
            color: ${props => 
                    props.itemType === "title" ? "rgb(175, 200, 200)" 
                    : "white"
                };
        }
    }
 `;

export { NavItemDiv };
import styled from "styled-components";

import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

export const IconContainer = styled.div`
    font-size: 2rem;
    padding: 1rem;
    @media (min-width: 675px) {
        padding: 2rem;
    }
`;

export const MenuIcon = styled(ImMenu)`
    color: #49a6e9;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

export const SideBarContainer = styled.aside`
    transform: translateX(${(props) => (props.isSideBarOpen ? `0` : `-100%`)});
    transition: all 1s ease;
    position: fixed;
    top: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    svg {
        cursor: pointer;
        &:hover {
            color: blue;
        }
    }
    @media (min-width: 675px) {
        max-width: 400px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const Logo = styled.h1`
    font-size: 1.7rem;
    color: #49a6e9;
`;

export const ExitIcon = styled(AiOutlineClose)`
    font-size: 2rem;
    color: red;
    :hover {
        color: #bb2525;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-size: 20px;
    color: #324d67;
    text-transform: capitalize;
`;

export const Link = styled.a`
    padding: 1rem;
    cursor: pointer;
    :hover {
        background-color: #f1f5f8;
    }
    svg {
        margin-right: 10px;
    }
`;

export const SideBarFooter = styled.div`
    flex-grow: 3;

    display: flex;
    align-items: flex-end;
    @media (min-width: 220px) {
        justify-content: center;
    }
`;

export const Icon = styled.a`
    font-size: 1.4rem;
    color: #49a6e9;
    svg {
        margin: 10px;
    }
`;

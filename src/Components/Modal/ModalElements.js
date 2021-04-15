import styled from "styled-components";

import { ExitIcon } from "../SideBar/SideBarElements";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50vh;
    justify-content: center;
    margin: 2rem;
    position: relative;
`;

export const ModalBtn = styled.button`
    background-color: black;
    color: white;
    padding: 6px 20px;
    font-size: 14px;

    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    text-transform: uppercase;
    &:hover {
        background-color: white;
        border: 2px solid black;
        color: black;
    }
`;

export const ModelComponent = styled.div`
    position: fixed;
    background-color: rgba(22, 22, 22, 0.6);
    width: 100vw;
    height: 130vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    width: 85%;
    max-width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CloseIcon = styled(ExitIcon)`
    font-size: 30px;
    margin: 10px;
`;

export const Text = styled.div`
    flex-grow: 2;
    margin: 60px auto 0 auto;
`;

export const Title = styled.h1`
    color: black;
    font-size: 20px;
    vertical-align: center;
    @media (min-width: 720px) {
        font-size: 28px;
    }
`;

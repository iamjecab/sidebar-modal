import React, { useContext } from "react";

import { GlobalContext } from "../GlobalContex/AppContex";
import {
    ModalContainer,
    ModalBtn,
    ModelComponent,
    IconContainer,
    CloseIcon,
    Text,
    Title,
    ModalContent,
} from "./ModalElements";

const Modal = () => {
    const { state, setState } = useContext(GlobalContext);
    const { isModalOpen } = state;
    const toggle = () => setState({ ...state, isModalOpen: !isModalOpen });
    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={toggle}>Show Modal</ModalBtn>
                {isModalOpen ? (
                    <ModelComponent>
                        <ModalContent>
                            <IconContainer>
                                <CloseIcon onClick={toggle} />
                            </IconContainer>
                            <Text>
                                <Title>Modal Content</Title>
                            </Text>
                        </ModalContent>
                    </ModelComponent>
                ) : null}
            </ModalContainer>
        </>
    );
};

export default Modal;

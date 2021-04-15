import React, { useContext } from "react";

import { links, social } from "../../Data/data";
import {
    IconContainer,
    MenuIcon,
    SideBarContainer,
    LogoContainer,
    Logo,
    ExitIcon,
    LinkContainer,
    Link,
    SideBarFooter,
    Icon,
} from "./SideBarElements";
import { GlobalContext } from "../GlobalContex/AppContex";

const SideBar = () => {
    const { state, setState } = useContext(GlobalContext);
    const { isSideBarOpen } = state;
    const toggle = () => setState({ ...state, isSideBarOpen: !isSideBarOpen });
    return (
        <>
            <IconContainer>
                <MenuIcon onClick={toggle} />
            </IconContainer>
            <SideBarContainer isSideBarOpen={isSideBarOpen}>
                <LogoContainer>
                    <Logo>Codding Addict</Logo>
                    <ExitIcon onClick={toggle} />
                </LogoContainer>
                <LinkContainer>
                    {links.map((link) => {
                        const { id, icon, text } = link;
                        return (
                            <Link key={id}>
                                {icon}
                                {text}
                            </Link>
                        );
                    })}
                </LinkContainer>
                <SideBarFooter>
                    {social.map((item) => {
                        const { id, icon } = item;
                        return <Icon key={id}>{icon}</Icon>;
                    })}
                </SideBarFooter>
            </SideBarContainer>
        </>
    );
};

export default SideBar;

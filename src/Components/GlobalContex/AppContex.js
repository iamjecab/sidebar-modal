import React, { useState } from "react";

export const GlobalContext = React.createContext();

const AppContex = (props) => {
    const [state, setState] = useState({
        isSideBarOpen: false,
        isModalOpen: false,
    });
    return (
        <>
            <GlobalContext.Provider value={{ state, setState }}>
                {props.children}
            </GlobalContext.Provider>
        </>
    );
};

export default AppContex;

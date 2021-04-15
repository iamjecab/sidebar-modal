import React from "react";

import GlobalStyles from "./Components/GlobalStyles/";
import Modal from "./Components/Modal";

import SideBar from "./Components/SideBar";

function App() {
    return (
        <>
            <GlobalStyles />

            <SideBar />
            <Modal />
        </>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContex from "./Components/GlobalContex/AppContex";

ReactDOM.render(
    <React.StrictMode>
        <AppContex>
            <App />
        </AppContex>
    </React.StrictMode>,
    document.getElementById("root")
);

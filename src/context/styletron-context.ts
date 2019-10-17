import {
    Context,
    createContext
} from "react";

import {
    StandardEngine
} from "styletron-standard";

type StyletronContextValue = {
    engine?: StandardEngine;
}

let styletronContext: Context<StyletronContextValue>;

function getStyletronContext() {
    if (!styletronContext) {
        styletronContext = createContext({});
    }

    return styletronContext;
}

export {
    getStyletronContext
};
import {
    createContext
} from "react";

import {
    StandardEngine
} from "styletron-standard";

const throwNoEngineAvailableException = () => {
    throw new Error(`A Styletron styled component was rendered, but no Styletron engine instance was provided in React context.`);
}

const StyletronContext = createContext<StandardEngine>({
    renderStyle: throwNoEngineAvailableException,
    renderFontFace: throwNoEngineAvailableException,
    renderKeyframes: throwNoEngineAvailableException
});

export {
    StyletronContext
};
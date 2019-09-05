import {
    useContext
} from "react";

import {
    StandardEngine
} from 'styletron-standard';

import {
    StyletronContext
} from "../context/styletron-context";

function useStyletron(): StandardEngine {
    return useContext(StyletronContext);
}

export {
    useStyletron
};
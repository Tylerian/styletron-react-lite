import {
    useContext
} from "react";

import {
    invariant
} from "ts-invariant";

import {
    StandardEngine
} from 'styletron-standard';

import {
    getStyletronContext
} from "../context/styletron-context";

function useStyletron(): StandardEngine {
    const StyletronContext = (
        getStyletronContext()
    );

    const {
        engine
    } = useContext(StyletronContext);

    invariant(
        engine,
        "No Styletron instance can be found. Please ensure that you " +
        "have called \"StyletronProvider\" higher up in your tree."
    );

    return engine!;
}

export {
    useStyletron
};
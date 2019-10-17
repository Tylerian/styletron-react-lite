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
        'No Apollo Client instance can be found. Please ensure that you ' +
          'have called `ApolloProvider` higher up in your tree.'
    );

    return engine!;
}

export {
    useStyletron
};
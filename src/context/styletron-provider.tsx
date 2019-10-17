import React, {
    PropsWithChildren
} from "react";

import {
    invariant
} from "ts-invariant";

import {
    StandardEngine
} from 'styletron-standard';

import {
    getStyletronContext
} from "./styletron-context";

type StyletronProviderProps = PropsWithChildren<{
    engine: StandardEngine;
 // children: React.ReactNode | React.ReactNode[] | null;
}>;

function StyletronProvider(props: StyletronProviderProps) {
    const StyletronContext = getStyletronContext();

    return (
        <StyletronContext.Consumer>
        {
            (context = {}) => {
                if (context && context.engine !== props.engine) {
                    context = Object.assign({}, context, { engine: props.engine });
                }

                invariant(
                    context.engine,
                    "StyletronProvider was not passed an engine instance." +
                    "Make sure you pass in your engine via the \"engine\" prop."
                );

                return (
                    <StyletronContext.Provider value={context}>
                        {props.children}
                    </StyletronContext.Provider>
                );
            }
        }
        </StyletronContext.Consumer>
    )
}

export {
    StyletronProvider
};
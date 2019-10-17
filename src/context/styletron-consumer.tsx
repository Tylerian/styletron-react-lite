import React, {
    ReactChild
} from "react";

import {
    invariant
} from "ts-invariant";

import {
    StandardEngine
} from "styletron-standard";

import {
    getStyletronContext
} from "./styletron-context";

type StyletronConsumerProps = {
    children: (engine: StandardEngine) => ReactChild | null;
}

function StyletronConsumer(props: StyletronConsumerProps) {
    const StyletronContext = getStyletronContext();

    return (
        <StyletronContext.Consumer>
        {
            (context: any) => {
                invariant(
                    context && context.engine,
                    "Could not find 'engine' in the context of StyletronConsumer." +
                    "Wrap the root component in an <StyletronProvider>."
                );
                return props.children(context.engine);
            }
        }
        </StyletronContext.Consumer>
    )
}

export {
    StyletronConsumer
};
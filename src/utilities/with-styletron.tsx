import React from "react";

import {
    useStyletron
} from "../hooks/use-styletron";

/**
 * Passes an styletron instance down the component tree.
 * 
 * @param Component A react component to pass styletron.
 */
const withStyletron = (Component: any) => (props: any) => {
    const styletron = useStyletron();

    return (
        <Component {...props} styletron={styletron} />
    );
}

export {
    withStyletron
};
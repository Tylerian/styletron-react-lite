import React from "react";

import {
    useStyletron
} from "./use-styletron";

const withStyletron = (Component: any) => (props: any) => {
    const styletron = useStyletron();

    return (
        <Component {...props} styletron={styletron} />
    );
}

export { withStyletron };
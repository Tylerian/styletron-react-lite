import {
    driver,
    StyleObject
} from "styletron-standard";

import {
    useStyletron
} from "./use-styletron";

function useStyletronDriver(): (styles: StyleObject) => string {
    const styletron = useStyletron();
    return (styles: StyleObject) => driver(styles, styletron);
}

export {
    useStyletronDriver
};
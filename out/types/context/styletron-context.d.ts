import { Context } from "react";
import { StandardEngine } from "styletron-standard";
declare type StyletronContextValue = {
    engine?: StandardEngine;
};
declare function getStyletronContext(): Context<StyletronContextValue>;
export { getStyletronContext };

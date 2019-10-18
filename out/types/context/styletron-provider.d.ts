import { PropsWithChildren } from "react";
import { StandardEngine } from 'styletron-standard';
declare type StyletronProviderProps = PropsWithChildren<{
    engine: StandardEngine;
}>;
declare function StyletronProvider(props: StyletronProviderProps): JSX.Element;
export { StyletronProvider };

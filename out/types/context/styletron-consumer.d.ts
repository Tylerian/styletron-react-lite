import { ReactChild } from "react";
import { StandardEngine } from "styletron-standard";
declare type StyletronConsumerProps = {
    children: (engine: StandardEngine) => ReactChild | null;
};
declare function StyletronConsumer(props: StyletronConsumerProps): JSX.Element;
export { StyletronConsumer };

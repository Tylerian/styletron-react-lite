import { useContext } from "react";
import { StyletronContext } from "../context/styletron-context";

function useStyletron() {
    return useContext(StyletronContext);
}

export { useStyletron };
import { StandardEngine } from "styletron-standard";
interface IStyletronEngineProvider {
    get(): StandardEngine;
}
export { IStyletronEngineProvider };

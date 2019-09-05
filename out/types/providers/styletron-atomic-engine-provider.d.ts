import { StandardEngine } from "styletron-standard";
import { hydrateType } from "styletron-engine-atomic";
import { IStyletronEngineProvider } from "./styletron-engine-provider";
declare type StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: string;
};
declare class StyletronAtomicEngineProvider implements IStyletronEngineProvider {
    private options;
    get(): StandardEngine;
    getHydratableElements: () => hydrateType;
    constructor(options?: StyletronAtomicEngineProviderOptions);
}
export { StyletronAtomicEngineProvider };

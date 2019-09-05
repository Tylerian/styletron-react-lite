import { Client, Server, hydrateType } from "styletron-engine-atomic";
import { IStyletronEngineProvider } from "./styletron-engine-provider";
declare type StyletronAtomicEngine = Client | Server;
declare type StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: string;
};
declare class StyletronAtomicEngineProvider implements IStyletronEngineProvider {
    private options;
    get(): StyletronAtomicEngine;
    getHydratableElements: () => hydrateType;
    constructor(options?: StyletronAtomicEngineProviderOptions);
}
export { StyletronAtomicEngineProvider };

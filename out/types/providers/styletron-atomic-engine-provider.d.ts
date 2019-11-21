import { Client as AtomicEngineClient, Server as AtomicEngineServer, hydrateType } from "styletron-engine-atomic";
import { IStyletronEngineProvider } from "./styletron-engine-provider";
declare type StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: string;
};
declare const DEFAULT_STYLETRON_HYDRATE_CLASS_NAME = "_styletron_hydrate_";
declare const DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR: string;
declare class StyletronAtomicEngineProvider implements IStyletronEngineProvider {
    private options;
    get(): AtomicEngineClient | AtomicEngineServer;
    getClient(): AtomicEngineClient;
    getServer(): AtomicEngineServer;
    getHydratableElements: () => hydrateType;
    constructor(options?: StyletronAtomicEngineProviderOptions);
}
export { StyletronAtomicEngineProvider, StyletronAtomicEngineProviderOptions, DEFAULT_STYLETRON_HYDRATE_CLASS_NAME, DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR };

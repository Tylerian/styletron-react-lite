import { StandardEngine } from "styletron-standard";
import { Client, Server, hydrateType } from "styletron-engine-atomic";

import { IStyletronEngineProvider } from "./styletron-engine-provider";

type StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: string;
}

const defaultOptions: StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: "_styletron_hydrate_"
};

class StyletronAtomicEngineProvider implements IStyletronEngineProvider {
    get(): StandardEngine {
        if (typeof window === "undefined") {
            return new Server();
        } else {
            return new Client({
                hydrate: this.getHydratableElements()
            });
        }
    }

    getHydratableElements: () => hydrateType = () => {
        return document.querySelectorAll(
            this.options.styleTagQuerySelector
        );
    }

    constructor(private options = defaultOptions) {
        this.options = options;
    }
}

export { StyletronAtomicEngineProvider };
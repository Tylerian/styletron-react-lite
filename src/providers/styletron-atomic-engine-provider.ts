import {
    Client as AtomicEngineClient,
    Server as AtomicEngineServer,
    hydrateType
} from "styletron-engine-atomic";

import {
    IStyletronEngineProvider
} from "./styletron-engine-provider";

type StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: string;
}

const defaultOptions: StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: "_styletron_hydrate_"
};

class StyletronAtomicEngineProvider implements IStyletronEngineProvider {
    get() /* infer */ {
        if (typeof window === "undefined") {
            return new AtomicEngineServer();
        } else {
            return new AtomicEngineClient({
                hydrate: this.getHydratableElements()
            });
        }
    }

    getClient(): AtomicEngineClient {
        return new AtomicEngineClient({
            hydrate: this.getHydratableElements()
        });
    }

    getServer(): AtomicEngineServer {
        return new AtomicEngineServer();
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

export {
    StyletronAtomicEngineProvider,
    StyletronAtomicEngineProviderOptions
};
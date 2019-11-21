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
const DEFAULT_STYLETRON_HYDRATE_CLASS_NAME = "_styletron_hydrate_";
const DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR = `.${DEFAULT_STYLETRON_HYDRATE_CLASS_NAME}`;

const defaultOptions: StyletronAtomicEngineProviderOptions = {
    styleTagQuerySelector: DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR
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
    StyletronAtomicEngineProviderOptions,
    DEFAULT_STYLETRON_HYDRATE_CLASS_NAME,
    DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR
};
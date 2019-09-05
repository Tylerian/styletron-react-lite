import {
    getAtomicProvider
} from "./get-atomic-provider";

const provider = getAtomicProvider();

/**
 * Return a new instance of a styletron client with preset defaults.
 */
function getStyletronClient() {
    return provider.getClient();
}

export {
    getStyletronClient
};
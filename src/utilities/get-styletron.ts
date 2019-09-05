import {
    getAtomicProvider
} from "./get-provider";

const provider = getAtomicProvider();

/**
 * Return a new instance of a styletron client with preset defaults.
 */
function getStyletronClient() {
    return provider.getClient();
}

/**
 * Return a new instance of a styletron server with preset defaults.
 */
function getStyletronServer() {
    return provider.getServer();
}

export {
    getStyletronClient,
    getStyletronServer
};
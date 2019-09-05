import {
    getAtomicProvider
} from "./get-atomic-provider";

const provider = getAtomicProvider();

/**
 * Return a new instance of a styletron server with preset defaults.
 */
function getStyletronServer() {
    return provider.getServer();
}

export {
    getStyletronServer
};
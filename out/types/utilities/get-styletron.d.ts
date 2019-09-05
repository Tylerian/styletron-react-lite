/**
 * Return a new instance of a styletron client with preset defaults.
 */
declare function getStyletronClient(): import("styletron-engine-atomic").Client;
/**
 * Return a new instance of a styletron server with preset defaults.
 */
declare function getStyletronServer(): import("styletron-engine-atomic").Server;
export { getStyletronClient, getStyletronServer };

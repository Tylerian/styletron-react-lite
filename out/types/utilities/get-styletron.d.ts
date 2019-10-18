/**
 * Return a new instance of a styletron client if ran client-side,
 * or a new instance of a styletron server if ran server-side.
 */
declare function getStyletron(): import("styletron-engine-atomic").Client | import("styletron-engine-atomic").Server;
/**
 * Return a new instance of a styletron client with preset defaults.
 */
declare function getStyletronClient(): import("styletron-engine-atomic").Client;
/**
 * Return a new instance of a styletron server with preset defaults.
 */
declare function getStyletronServer(): import("styletron-engine-atomic").Server;
export { getStyletron, getStyletronClient, getStyletronServer };

import { StyletronAtomicEngineProvider, StyletronAtomicEngineProviderOptions } from "../providers/styletron-atomic-engine-provider";
/**
 * Return a new instance of a StyletronEngineProvider
 * based on StyletronAtomic as its backing engine.
 *
 * @param options StyletronAtomicEngine configuration options.
 */
declare function getAtomicProvider(options?: StyletronAtomicEngineProviderOptions): StyletronAtomicEngineProvider;
export { getAtomicProvider };

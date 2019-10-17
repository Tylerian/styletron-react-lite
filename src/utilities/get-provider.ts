import { 
    StyletronAtomicEngineProvider,
    StyletronAtomicEngineProviderOptions
} from "../providers/styletron-atomic-engine-provider";

/**
 * Return a new instance of a StyletronEngineProvider 
 * based on StyletronAtomic as its backing engine.
 * 
 * @param options StyletronAtomicEngine configuration options.
 */
function getAtomicProvider(options?: StyletronAtomicEngineProviderOptions) {
    return new StyletronAtomicEngineProvider(options);
}

export {
    getAtomicProvider
};
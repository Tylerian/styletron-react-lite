import { 
    StyletronAtomicEngineProvider,
    StyletronAtomicEngineProviderOptions
} from "../providers/styletron-atomic-engine-provider";

function getAtomicProvider(options?: StyletronAtomicEngineProviderOptions) {
    return new StyletronAtomicEngineProvider(options);
}

export {
    getAtomicProvider
};
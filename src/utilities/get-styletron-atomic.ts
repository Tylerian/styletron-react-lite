import { 
    StyletronAtomicEngineProvider
} from "../providers/styletron-atomic-engine-provider";

const provider = new StyletronAtomicEngineProvider();

function getStyletronAtomic() {
    return provider.get();
}

export {
    getStyletronAtomic
};
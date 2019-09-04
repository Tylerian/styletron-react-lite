import { createContext } from 'react';
import { Server, Client } from 'styletron-engine-atomic';

var throwNoEngineAvailableException = function () {
    throw new Error("A Styletron styled component was rendered, but no Styletron engine instance was provided in React context.");
};
var StyletronContext = createContext({
    renderStyle: throwNoEngineAvailableException,
    renderFontFace: throwNoEngineAvailableException,
    renderKeyframes: throwNoEngineAvailableException
});

var StyletronConsumer = StyletronContext.Consumer;

var StyletronProvider = StyletronContext.Provider;

var defaultOptions = {
    styleTagQuerySelector: "_styletron_hydrate_"
};
var StyletronAtomicEngineProvider = /** @class */ (function () {
    function StyletronAtomicEngineProvider(options) {
        var _this = this;
        if (options === void 0) { options = defaultOptions; }
        this.options = options;
        this.getHydratableElements = function () {
            return document.querySelectorAll(_this.options.styleTagQuerySelector);
        };
        this.options = options;
    }
    StyletronAtomicEngineProvider.prototype.get = function () {
        if (typeof window === "undefined") {
            return new Server();
        }
        else {
            return new Client({
                hydrate: this.getHydratableElements()
            });
        }
    };
    return StyletronAtomicEngineProvider;
}());

function useStyletron() {
}

function withStyletron() {
}

export { StyletronAtomicEngineProvider, StyletronConsumer, StyletronContext, StyletronProvider, useStyletron, withStyletron };

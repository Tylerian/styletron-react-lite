(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styletron-engine-atomic')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'styletron-engine-atomic'], factory) :
    (global = global || self, factory(global.StyletronReactLite = {}, global.react, global.styletronEngineAtomic));
}(this, function (exports, react, styletronEngineAtomic) { 'use strict';

    var throwNoEngineAvailableException = function () {
        throw new Error("A Styletron styled component was rendered, but no Styletron engine instance was provided in React context.");
    };
    var StyletronContext = react.createContext({
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
                return new styletronEngineAtomic.Server();
            }
            else {
                return new styletronEngineAtomic.Client({
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

    exports.StyletronAtomicEngineProvider = StyletronAtomicEngineProvider;
    exports.StyletronConsumer = StyletronConsumer;
    exports.StyletronContext = StyletronContext;
    exports.StyletronProvider = StyletronProvider;
    exports.useStyletron = useStyletron;
    exports.withStyletron = withStyletron;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

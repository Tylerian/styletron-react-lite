(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styletron-engine-atomic'), require('styletron-standard')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'styletron-engine-atomic', 'styletron-standard'], factory) :
    (global = global || self, factory(global.StyletronReactLite = {}, global.React, global.styletronEngineAtomic, global.styletronStandard));
}(this, function (exports, React, styletronEngineAtomic, styletronStandard) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    var throwNoEngineAvailableException = function () {
        throw new Error("A Styletron styled component was rendered, but no Styletron engine instance was provided in React context.");
    };
    var StyletronContext = React.createContext({
        renderStyle: throwNoEngineAvailableException,
        renderFontFace: throwNoEngineAvailableException,
        renderKeyframes: throwNoEngineAvailableException
    });

    var StyletronConsumer = StyletronContext.Consumer;

    var StyletronProvider = StyletronContext.Provider;

    var DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR = "_styletron_hydrate_";
    var defaultOptions = {
        styleTagQuerySelector: DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR
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
        StyletronAtomicEngineProvider.prototype.getClient = function () {
            return new styletronEngineAtomic.Client({
                hydrate: this.getHydratableElements()
            });
        };
        StyletronAtomicEngineProvider.prototype.getServer = function () {
            return new styletronEngineAtomic.Server();
        };
        return StyletronAtomicEngineProvider;
    }());

    function getAtomicProvider(options) {
        return new StyletronAtomicEngineProvider(options);
    }

    var provider = getAtomicProvider();
    /**
     * Return a new instance of a styletron client with preset defaults.
     */
    function getStyletronClient() {
        return provider.getClient();
    }

    var provider$1 = getAtomicProvider();
    /**
     * Return a new instance of a styletron server with preset defaults.
     */
    function getStyletronServer() {
        return provider$1.getServer();
    }

    function useStyletron() {
        return React.useContext(StyletronContext);
    }

    function useStyletronDriver() {
        var styletron = useStyletron();
        return function (styles) { return styletronStandard.driver(styles, styletron); };
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var withStyletron = function (Component) { return function (props) {
        var styletron = useStyletron();
        return (React__default.createElement(Component, __assign({}, props, { styletron: styletron })));
    }; };

    exports.DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR = DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR;
    exports.StyletronAtomicEngineProvider = StyletronAtomicEngineProvider;
    exports.StyletronConsumer = StyletronConsumer;
    exports.StyletronContext = StyletronContext;
    exports.StyletronProvider = StyletronProvider;
    exports.getAtomicProvider = getAtomicProvider;
    exports.getStyletronClient = getStyletronClient;
    exports.getStyletronServer = getStyletronServer;
    exports.useStyletron = useStyletron;
    exports.useStyletronDriver = useStyletronDriver;
    exports.withStyletron = withStyletron;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

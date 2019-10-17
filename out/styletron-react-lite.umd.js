(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styletron-engine-atomic'), require('styletron-standard')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'styletron-engine-atomic', 'styletron-standard'], factory) :
    (global = global || self, factory(global.StyletronReactLite = {}, global.React, global.styletronEngineAtomic, global.styletronStandard));
}(this, function (exports, React, styletronEngineAtomic, styletronStandard) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    var genericMessage = "Invariant Violation";
    var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
        obj.__proto__ = proto;
        return obj;
    } : _a;
    var InvariantError = /** @class */ (function (_super) {
        __extends(InvariantError, _super);
        function InvariantError(message) {
            if (message === void 0) { message = genericMessage; }
            var _this = _super.call(this, typeof message === "number"
                ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
                : message) || this;
            _this.framesToPop = 1;
            _this.name = genericMessage;
            setPrototypeOf(_this, InvariantError.prototype);
            return _this;
        }
        return InvariantError;
    }(Error));
    function invariant(condition, message) {
        if (!condition) {
            throw new InvariantError(message);
        }
    }
    function wrapConsoleMethod(method) {
        return function () {
            return console[method].apply(console, arguments);
        };
    }
    (function (invariant) {
        invariant.warn = wrapConsoleMethod("warn");
        invariant.error = wrapConsoleMethod("error");
    })(invariant || (invariant = {}));
    // Code that uses ts-invariant with rollup-plugin-invariant may want to
    // import this process stub to avoid errors evaluating process.env.NODE_ENV.
    // However, because most ESM-to-CJS compilers will rewrite the process import
    // as tsInvariant.process, which prevents proper replacement by minifiers, we
    // also attempt to define the stub globally when it is not already defined.
    var processStub = { env: {} };
    if (typeof process === "object") {
        processStub = process;
    }
    else
        try {
            // Using Function to evaluate this assignment in global scope also escapes
            // the strict mode of the current module, thereby allowing the assignment.
            // Inspired by https://github.com/facebook/regenerator/pull/369.
            Function("stub", "process = stub")(processStub);
        }
        catch (atLeastWeTried) {
            // The assignment can fail if a Content Security Policy heavy-handedly
            // forbids Function usage. In those environments, developers should take
            // extra care to replace process.env.NODE_ENV in their production builds,
            // or define an appropriate global.process polyfill.
        }

    var styletronContext;
    function getStyletronContext() {
        if (!styletronContext) {
            styletronContext = React.createContext({});
        }
        return styletronContext;
    }

    function StyletronConsumer(props) {
        var StyletronContext = getStyletronContext();
        return (React__default.createElement(StyletronContext.Consumer, null, function (context) {
            invariant(context && context.engine, "Could not find 'engine' in the context of StyletronConsumer." +
                "Wrap the root component in an <StyletronProvider>.");
            return props.children(context.engine);
        }));
    }

    function StyletronProvider(props) {
        var StyletronContext = getStyletronContext();
        return (React__default.createElement(StyletronContext.Consumer, null, function (context) {
            if (context === void 0) { context = {}; }
            if (context && context.engine !== props.engine) {
                context = Object.assign({}, context, { engine: props.engine });
            }
            invariant(context.engine, "StyletronProvider was not passed an engine instance." +
                "Make sure you pass in your client via the \"client\" prop.");
            return (React__default.createElement(StyletronContext.Provider, { value: context }, props.children));
        }));
    }

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
    /**
     * Return a new instance of a styletron server with preset defaults.
     */
    function getStyletronServer() {
        return provider.getServer();
    }

    function useStyletron() {
        var StyletronContext = (getStyletronContext());
        var engine = React.useContext(StyletronContext).engine;
        invariant(engine, 'No Apollo Client instance can be found. Please ensure that you ' +
            'have called `ApolloProvider` higher up in your tree.');
        return engine;
    }

    function useStyletronDriver() {
        var styletron = useStyletron();
        return function (styles) { return styletronStandard.driver(styles, styletron); };
    }

    var withStyletron = function (Component) { return function (props) {
        var styletron = useStyletron();
        return (React__default.createElement(Component, __assign({}, props, { styletron: styletron })));
    }; };

    exports.DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR = DEFAULT_STYLETRON_HYDRATE_QUERY_SELECTOR;
    exports.StyletronAtomicEngineProvider = StyletronAtomicEngineProvider;
    exports.StyletronConsumer = StyletronConsumer;
    exports.StyletronProvider = StyletronProvider;
    exports.getAtomicProvider = getAtomicProvider;
    exports.getStyletronClient = getStyletronClient;
    exports.getStyletronServer = getStyletronServer;
    exports.useStyletron = useStyletron;
    exports.useStyletronDriver = useStyletronDriver;
    exports.withStyletron = withStyletron;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

import manifest from "./package.json";

import commonjs from "rollup-plugin-commonjs";
import resolver from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";

export default {
    external: [
        "react",
        "styletron-standard",
        "styletron-engine-atomic"
    ],
    input: "src/index.ts",
    output: [
        { file: manifest.module, format: "es" },
        { file: manifest.main, format: "cjs", },
        { file: manifest.browser, format: "umd", name: "StyletronReactLite" },
    ],
    plugins: [
        /* tells rollup howto find in node_modules */
        resolver(),
        /* converts commonjs modules to es modules */
        commonjs({
            include: "node_modules/**",
            namedExports: {
                "react": [
                    "useContext"
                ],
                "styletron-standard": [
                    "StandardEngine"
                ],
                "styletron-atomic-engine": [
                    "Client",
                    "server"
                ]
            }
        }),
        /* transpiles ts files to plain javascript */
        typescript()
    ]
}
import manifest from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import invariant from "rollup-plugin-invariant";
import resolver from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import typescript from "rollup-plugin-typescript";

export default {
    external: [
        "react",
        "styletron-standard",
        "styletron-engine-atomic"
    ],
    input: "src/index.ts",
    output: [
        {
            file: manifest.module,
            format: "es"
        },
        {
            file: manifest.main,
            format: "cjs",
        },
        {
            file: manifest.browser, 
            format: "umd",
            globals: {
                "react": "React",
                "styletron-standard": "StyletronStandard",
                "styletron-engine-atomic": "StyletronEngineAtomic"
            },
             name: "StyletronReactLite"
        }
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
        typescript(),
        /* transform ts-invariant calls for minifiers */
        invariant(),
        /* replace strings before bundling */
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}
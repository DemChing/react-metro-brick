const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: {
        app: {
            import: "./output/index.tsx",
            dependOn: ["vendor"]
        },
        demo: {
            import: "./output/demo.tsx",
            dependOn: ["vendor"]
        },
        vendor: ["react", "react-dom"],
    },
    output: {
        path: path.resolve(__dirname, "docs/js"),
        filename: "[name].bundle.js"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                },
            }, {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                }
            }],
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ['postcss-preset-env']
                            ]
                        }
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    },
                },
            ],
        }, ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".sass", ".css", ".svg"],
    },
    watchOptions: {
        ignored: /node_modules/
    },
};
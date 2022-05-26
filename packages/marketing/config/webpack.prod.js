const { merge } = require("webpack-merge")
const ModelFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonCofig = require("./webpack.common")
const packageJson = require("../package.json")

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/marketing/latest/"
    },
    plugins: [
        new ModelFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap.js"
            },
            shared: packageJson.dependencies,         
        }),
    ]
}

module.exports = merge(commonCofig, prodConfig)
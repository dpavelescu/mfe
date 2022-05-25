const { merge } = require("webpack-merge")
const ModelFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonCofig = require("./webpack.common")
const packageJson = require("../package.json")

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
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
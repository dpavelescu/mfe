const { merge } = require("webpack-merge")
const ModelFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonCofig = require("./webpack.common")
const packageJson = require("../package.json")

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/container/latest/"
    },
    plugins: [
        new ModelFederationPlugin({
            name: "container",
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies,         
        }),
    ]
}

module.exports = merge(commonCofig, prodConfig)
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node|_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    }
                }
            },
        ]
    }
}
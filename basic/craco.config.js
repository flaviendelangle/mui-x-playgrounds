const { whenProd, } = require("@craco/craco");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    webpack: {
        plugins: {
            add: [
                ...whenProd(() => [new BundleAnalyzerPlugin()], [])
            ]
        }
    }
}
const nodeExternals = require('webpack-node-externals');

const resolvePath = (pathToResolve = '') => require('path').path(__dirname, pathToResolve)

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [resolvePath('src'), resolvePath('tests')],
                loader: 'ts'
            }
        ]
    }
}

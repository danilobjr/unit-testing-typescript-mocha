const resolvePath = (pathToResolve = '') => require('path').resolve(__dirname, pathToResolve)

module.exports = {
    entry: resolvePath('src/index.ts'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [resolvePath('src')],
                loader: 'ts'
            }
        ]
    }
};

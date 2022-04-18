const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        home: path.resolve(__dirname, './src/page/home/index.js'),
        ar: path.resolve(__dirname, './src/page/ar/index.js'),
        credit: path.resolve(__dirname, './src/page/credit/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash:8].js',
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },

            {
                test: /\.(png|jpg|jpeg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'assets',
                            useRelativePaths: true,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(gltf|bin)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/model',
                },
            },
            // {
            //     test: /\.(gltf)$/,
            //     loader: 'gltf-webpack-loader',
            //     options: {
            //         esModule: false,
            //         outputPath: 'assets',
            //         publicPath: './assets',
            //         useRelativePaths: true,
            //     },
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/page/home/index.html'),
            chunks: ['home'],
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/page/ar/index.html'),
            chunks: ['ar'],
            filename: 'ar/index.html',
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/page/credit/index.html'),
            chunks: ['credit'],
            filename: 'credit/index.html',
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/model/phone.bin'),
                    to: path.resolve(__dirname, './dist/assets/model/phone.bin'),
                },
                {
                    from: path.resolve(__dirname, './src/assets/model/ar_screenshot.jpg'),
                    to: path.resolve(__dirname, './dist/assets/model/ar_screenshot.jpg'),
                },
            ],
        }),
    ],
};

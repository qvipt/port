const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const svgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const webpack = require('webpack');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: {
        'about': PATHS.source + '/pages/about/about.js',
        'welcome': PATHS.source + '/pages/welcome/welcome.js',
        'blog': PATHS.source + '/pages/blog/blog.js',
        'work': PATHS.source + '/pages/work/work.js',
        'vue': PATHS.source + '/pages/vue.test/vue.test.js',
    },
    output: {
        path: PATHS.build
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    },
    devServer: {
        contentBase: PATHS.build,
        compress: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about', 'common'],
            template: PATHS.source + '/pages/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'welcome.html',
            chunks: ['welcome', 'common'],
            template: PATHS.source + '/pages/welcome/welcome.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog', 'common'],
            template: PATHS.source + '/pages/blog/blog.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'work.html',
            chunks: ['work', 'common'],
            template: PATHS.source + '/pages/work/work.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'vue.html',
            chunks: ['vue', 'common'],
            template: PATHS.source + '/pages/vue.test/vue.test.pug'
        }),
        new ExtractTextPlugin('./css/[name].css'),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        new svgSpriteLoaderPlugin({
            plainSprite: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery'
        })

    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },            
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'images/sprite.svg'
                }
            },
            {
              test: /\.(frag|vert)$/,
              loader: 'webpack-glsl-loader'
            }
        ]
    }
};
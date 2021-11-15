const mix = require('laravel-mix');
const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .webpackConfig({
        plugins: [
            new VueLoaderPlugin(),
            new VuetifyLoaderPlugin(),
        ],
        stats:{
            children: true
        },
        // module: {
        //     rules: [
        //       {
        //         test: /\.s(c|a)ss$/,
        //         use: [
        //         //   'style-loader',
        //           'vue-style-loader',
        //           'css-loader',
        //           {
        //             loader: 'sass-loader',
        //             // Requires sass-loader@^7.0.0
        //             options: {
        //               implementation: require('sass'),
        //               indentedSyntax: true // optional
        //             },
        //             // Requires >= sass-loader@^8.0.0
        //             options: {
        //               implementation: require('sass'),
        //               sassOptions: {
        //                 indentedSyntax: true // optional
        //               },
        //             },
        //           },
        //         ],
        //       },
        //     ],
        //   }
    })
    .js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

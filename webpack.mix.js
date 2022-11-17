let mix = require('laravel-mix');

mix.ts('resources/assets/ts/app.ts', 'public/js/app.js')
    .sass('resources/assets/sass/app.scss', 'css').setPublicPath('public');
    
// mix.combine('public/js', 'app.js');
// mix.babel('public/js/app.js');

mix.copy('resources/assets/images', 'public/images');
mix.copy('resources/assets/icons', 'public/icons');
mix.copy('resources/assets/fonts', 'public/fonts');

if(mix.inProduction() ) {
    mix.version();
} else {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}

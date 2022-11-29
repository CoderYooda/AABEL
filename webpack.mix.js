let mix = require('laravel-mix');

// главный сайт
mix.ts('resources/public/ts/app.ts', 'js/main').setPublicPath('public')
    .sass('resources/public/sass/app.scss', 'css/main').setPublicPath('public');

// админка
mix.js('resources/admin/js/app.js', 'js/admin').vue()
    .sass('resources/admin/scss/app.scss', 'css/admin');

// assets    
mix.copyDirectory('resources/assets/images', 'public/images');
mix.copyDirectory('resources/assets/icons', 'public/icons');
mix.copyDirectory('resources/assets/fonts', 'public/fonts');
mix.copyDirectory('resources/public/ts/modules', 'public/js/modules');

if(mix.inProduction() ) {
    mix.version();
} else {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}

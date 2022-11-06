const mix = require('laravel-mix')

mix.js('src/main.js', 'dist/main.js')
    .copy('src/index.html', 'dist')
    .disableNotifications()
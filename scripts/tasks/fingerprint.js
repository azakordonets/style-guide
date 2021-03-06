module.exports = function (gulp, plugins, consts) {
    return function () {
        var fonts = plugins.path.join(consts.SRC, 'fonts', '*');
        var images = plugins.path.join(consts.SRC, 'images', '*');
        var logos = plugins.path.join(consts.SRC, 'images', 'logos', '*');

        // by default, gulp would pick `assets/css` as the base,
        // so we need to set it explicitly:
        return gulp.src([fonts, images, logos], {base: './src'})
            .pipe(plugins.rev())
            .pipe(gulp.dest(consts.DIST))  // write rev'd assets to build dir
            .pipe(plugins.rev.manifest())
            .pipe(gulp.dest(consts.VERSIONED_DIST)); // write manifest to build dir
    }
};

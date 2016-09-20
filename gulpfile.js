var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("default", ["browser-sync"]);

gulp.task("browser-sync", function(){
  browserSync({
    proxy: {
      target: "http://localhost/~ryansoury/Uni/web-systems/",
      ws: false
    },
    port: 3001,
    browser: "google chrome",
    open: true
  });
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("*.css", browserSync.stream());
});

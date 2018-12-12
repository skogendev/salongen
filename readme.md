# Skogen starter
## File structure
File/folder|Description
--- | ---
src | All source files for processing CSS, javascript and images
src/css | CSS source files
templates | Craft templates
templates/_inline | Code that needs to be inlined, such as critical CSS
templates/_layout | All layouts

## Suggested/required Craft plugins
[AsyncQueue](https://github.com/ostark/craft-async-queue) to handle stuck tasks.

## Gulp
Run `gulp watch` in dev mode. Before production deployment run `gulp --prod`.

## Techniques used
[Asset versioning by Studio107](https://nystudio107.com/blog/simple-static-asset-versioning)

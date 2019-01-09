# Skogen starter
## Install
1) `mkdir project-folder`
2) cd in to folder and `composer create-project craftcms/craft .`
3) `git init`
4) `git clone https://github.com/skogendev/starter-magnus`
5) `git remote add origin https://github.com/skogendev/project-name.git`

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
Run `gulp dev` in dev mode. Before production deployment run `gulp --prod`.

## Techniques used
[Asset versioning by Studio107](https://nystudio107.com/blog/simple-static-asset-versioning)

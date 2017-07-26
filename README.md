## Web dev boilerplate for working with npm / gulp and postcss

I wanted to make a simple starter kit for any smaller web project to save me time, so I created this.

### Setting it up

* git clone https://github.com/yabbes/web-boilerplate
* npm install
* rm -rf .git && git init

#### Included in this package
* normalize.css
* browser-sync
* gulp
* gulp-postcss with the following plugins
 * lost
 * gulp-watch
 * postcss-import
 * postcss-mixins
 * postcss-nested
 * postcess-nested-vars

I wanted to keep this clean so no further plugins have been included for the time being. This is just supposed to help setting up new projects faster.

#### Configuration
gulp has been preconfigured with the following tasks
* styles
* watch
* default

The default task runs them all and serves your project through browser-sync, injecting any changes to the source css files made in real time.

Happy coding

[![Build Status](https://api.travis-ci.org/understrap/understrap.svg?branch=master)](https://travis-ci.org/understrap/understrap)
[![Wordpress Theme Version](https://img.shields.io/wordpress/theme/v/understrap.svg)](https://wordpress.org/themes/understrap)
[![Wordpress Theme Active Installs](https://img.shields.io/wordpress/theme/installs/understrap.svg)](https://wordpress.org/themes/understrap/)
[![Github Last Commit](https://img.shields.io/github/last-commit/understrap/understrap)](https://github.com/understrap/understrap/commits/master)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0)

# Mayo Starter (Understrap) WordPress Theme Framework

This repository is a highly opinionated fork of the Understrap starter theme framework.

Website: [https://github.com/randmanrjr/understrap](https://github.com/randmanrjr/understrap/tree/mayo-starter)

OverStrap Child Themes: [https://understrap.com/overstrap/](https://understrap.com/overstrap/)

## About

I've taken the already comprehensive Understrap starter theme and enhanced it to include additional files and packages that suite our organization's needs.

**From the original authors:** I’m a huge fan of Underscores, Bootstrap, and Sass. Why not combine these into a solid WordPress Theme Framework? That’s what UnderStrap is. You can use it as starter theme and build your own theme on top of it. Or you can use it as a parent theme and create your own child theme for UnderStrap.

## License
UnderStrap WordPress Theme, Copyright 2013-2018 Holger Koenemann
UnderStrap is distributed under the terms of the GNU GPL version 2

http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html

## Changelog
See [changelog](CHANGELOG.md)


## Basic Features

- Combines Underscore’s PHP/JS files and Bootstrap’s HTML/CSS/JS.
- Comes with Bootstrap (v4) Sass source files and additional .scss files. Nicely sorted and ready to add your own variables and customize the Bootstrap variables.
- Uses a single minified CSS file for all the basic stuff.
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/) integration (v4.7.0)
- Jetpack ready.
- WooCommerce support.
- Contact Form 7 support.
- [Child Theme](https://github.com/understrap/understrap-child) ready.
- Translation ready.

## Starter Theme + HTML Framework = WordPress Theme Framework

The _s theme is a good starting point to develop a WordPress theme. But it is “just” a raw starter theme. That means it outputs all the WordPress stuff correctly but without any layout or design.
Why not add a well known and supported layout framework to have a solid, clean and responsive foundation? That’s where Bootstrap comes in.

## Confused by All the CSS and Sass Files?

Some basics about the Sass and CSS files that come with Mayo Starter (Understrap):
- The theme itself uses the `/style.css`file only to identify the theme inside of WordPress. The file is not loaded by the theme and does not include any styles.
- The `/css/theme.css` and its minified little brother `/css/theme.min.css` file(s) provides all styles. Are compiled from the different SCSS sets and one variable file at `/sass/theme.scss`:
    - `@import "assets/b4functions";` // 1. Bootstrap 4 functions required by theme_variables
    - `@import "theme/theme_variables";`  // 2. Add your variables into this file. Also add variables to overwrite Bootstrap or UnderStrap variables here
    - `@import "../src/bootstrap-sass/assets/stylesheets/bootstrap";`  // 3. All the Bootstrap stuff - Don´t edit this!
    - `@import "understrap/understrap";` // 4. Some basic WordPress stylings and needed styles to combine Boostrap and Underscores
    - `@import "../src/fontawesome/scss/font-awesome";` // 5. Font Awesome Icon styles
    - // Any additional imported files //
    - `@import "theme/theme";`  // 6. Add your styles into this file


- Don’t edit the files no. 3-5 files/filesets or you won’t be able to update the theme framework without overwriting your own work!
- Your design goes into: `/sass/theme`.
    - `/sass/theme/_theme_variables.scss` The variables defined here override the default Bootstrap variables
    - `/sass/theme/_header.scss` (your header styles go here)
    - `/sass/theme/_navigation.scss` (styles for customizing the Bootstrap Navbar)
    - `/sass/theme/_theme.scss` (general styles for the theme)
    - `sass/theme/_footer.scss` (your footer styles go here)
    - `sass/theme/_gravity_forms.scss` (scss template for overriding gravity forms styles)
    - Or add other .scss files into it and `@import` it into `/sass/theme/_theme.scss`.

    **Note:** Please leverage the `_theme_variables.scss` file to modify the default Bootstrap styles/behaviour. Also when using colors throughout your SASS code, please first define a color variable or use one of the existing variables instead of hard coding the color. This makes globally updating the theme's colors more streamlined.

## Start by cloning this repository and checking out the mayo-starter branch

```bash
$ git clone https://github.com/randmanrjr/understrap.git
$ git checkout -b mayo-starter origin/mayo-starter
```

### WordPress.org install
- Open your WordPress backend
- Click on "Appearance -> Themes"
- Hit the "Add new" button
- Search for "UnderStrap"
- Hit the "install" button
- Activate the theme

## Developing With npm, Gulp and SASS and [Browser Sync][1]

### Installing Dependencies
- Make sure you have installed Node.js (stable version 6 release works well) and Browser-Sync (optional) on your computer globally
- Then open your terminal and browse to the location of your UnderStrap copy
- Run: `$ npm install`

### Running
To work with and compile your Sass files on the fly start:

- `$ gulp watch`

To Build everything and copy all the theme files to `/dist` :

- `$ gulp build-all`

Or, to run with Browser-Sync:

- First change the browser-sync options to reflect your environment in the file `/gulpconfig.json` in the beginning of the file:
```javascript
{
    "browserSyncOptions" : {
        "proxy": "localhost/theme_test/", // <----- CHANGE HERE
        "notify": false
    },
    ...
};
```
- then run: `$ gulp watch-bs`

## How to Use the Built-In Widget Slider

The front-page slider is widget driven. Simply add more than one widget to widget position “Hero”.
- Click on Appearance → Widgets.
- Add two, or more, widgets of any kind to widget area “Hero”.
- That’s it.

## RTL styles?
Add a new file to the themes root folder called rtl.css. Add all alignments to this file according to this description:
https://codex.wordpress.org/Right_to_Left_Language_Support

## Page Templates
UnderStrap includes several different page template files: (1) blank template, (2) empty template, and (3) full width template.

### Blank Template

The `blank.php` template is useful when working with various page builders and can be used as a starting blank canvas.

### Empty Template

The `empty.php` template displays a header and a footer only. A good starting point for landing pages.

### Full Width Template

The `fullwidthpage.php` template has full width layout without a sidebar.

## Footnotes

[1] Visit [http://browsersync.io](http://browsersync.io) for more information on Browser Sync

Licenses & Credits
=
- Font Awesome: http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
- Bootstrap: http://getbootstrap.com | https://github.com/twbs/bootstrap/blob/master/LICENSE (Code licensed under MIT documentation under CC BY 3.0.)
and of course
- jQuery: https://jquery.org | (Code licensed under MIT)
- WP Bootstrap Navwalker by Edward McIntyre: https://github.com/twittem/wp-bootstrap-navwalker | GNU GPL
- Bootstrap Gallery Script based on Roots Sage Gallery: https://github.com/roots/sage/blob/5b9786b8ceecfe717db55666efe5bcf0c9e1801c/lib/gallery.php

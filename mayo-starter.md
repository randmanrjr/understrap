# MAYO Starter Theme

This repository is a highly opinionated fork of the Understrap starter theme framework.

## About

I've taken the already comprehensive Understrap starter theme and enhanced it to include additional files and packages that suite our organization's needs.

**From the original authors:** I’m a huge fan of Underscores, Bootstrap, and Sass. Why not combine these into a solid WordPress Theme Framework? That’s what UnderStrap is. You can use it as starter theme and build your own theme on top of it. Or you can use it as a parent theme and create your own child theme for UnderStrap.

## License
UnderStrap WordPress Theme, Copyright 2013-2018 Holger Koenemann
UnderStrap is distributed under the terms of the GNU GPL version 2

http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html

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
	- `@import "src/sass/assets/b4functions";` // 1. Bootstrap 4 functions required by theme_variables
	- `@import "src/sass/theme/theme_variables";`  // 2. Add your variables into this file. Also add variables to overwrite Bootstrap or UnderStrap variables here
	- `@import "/src/bootstrap-sass/assets/stylesheets/bootstrap";`  // 3. All the Bootstrap stuff - Don´t edit this!
	- `@import "src/sass/theme/understrap";` // 4. Some basic WordPress stylings and needed styles to combine Boostrap and Underscores
	- `@import "/src/sass/assets/fontawesome/scss/font-awesome";` // 5. Font Awesome Icon styles
	- // Any additional imported files //
	- `@import "src/sass/theme/theme";`  // 6. Add your styles into this file


- Don’t edit the files no. 3-5 files/filesets or you won’t be able to update the theme framework without overwriting your own work!
- Your design goes into: `src/sass/theme`.
    - `src/sass/theme/_theme_variables.scss` The variables defined here override the default Bootstrap variables
    - `src/sass/theme/_header.scss` (your header styles go here)
    - `src/sass/theme/_navigation.scss` (styles for customizing the Bootstrap Navbar)
    - `src/sass/theme/_theme.scss` (general styles for the theme)
    - `src/sass/theme/_footer.scss` (your footer styles go here)
    - `src/sass/theme/_gravity-forms.scss` (scss template for overriding gravity forms styles)
    - `src/sass/theme/page-templates/*` (this folder contains scss partials for each page template)
      - **note:** each scss partial's name should match the page template.
    - `src/sass/theme/flexible-layouts/*` (this folder contains scss partials for each acf flexible content row)
      - **note:** each scss partial's name should match the flexible content php partial's name.
    - Or add other .scss files into it and `@import` it into `/sass/theme/_theme.scss`.

  **Note:** Please leverage the `_theme_variables.scss` file to modify the default Bootstrap styles/behaviour. Also when using colors throughout your SASS code, please first define a color variable or use one of the existing variables instead of hard coding the color. This makes globally updating the theme's colors more streamlined.

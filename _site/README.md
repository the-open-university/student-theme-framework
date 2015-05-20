Working on the Student Theme
=======================

The idea is to have the basic assets for the theme (master branch) and site documentation (gh-pages) living together in one place. We also want to make it easy to contribute, by being able to pull down the demo site and contribute to it.

For this we're using [GitHub Pages](https://pages.github.com), which basically uses [Jekyll](http://jekyllrb.com/) to generate a static site.

## Installation

### Mac
Mac's already come bundled with a system version of ruby, so to install Jekyll you simply need to run the command:

    sudo gem install jekyll

## Using Gulp for a faster workflow

Jekyll can take ~3-5 seconds to build, which is not ideal if you're working on CSS and want to see immediate results. For this we use Gulp to manage our site and only ask Jekyll to build the site if one of html files has changed.

Here's the simplest way to install on a Mac
- [Homebrew](http://brew.sh) - a package management system for Mac that makes installing things a ton easier. To install paste the following into terminal and hit return:
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Now we can use this to install [node.js](http://nodejs.org) by entering the following into terminal: `brew install nodejs`
- And once that's done you can install [Gulp](http://gulpjs.com) with: `npm install --global gulp`

Now we're nearly there, finally you have to `cd path/to/student-theme`, run `npm install`, and once that's complete run `gulp`

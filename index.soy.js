// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

if (typeof index == 'undefined') { var index = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
index.page = function(opt_data, opt_ignored) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="author" content="Eduardo Lundgren"><meta name="description" content="A modern approach for Computer Vision on the web."><meta property="og:title" content="tracking.js"><meta property="og:description" content="A modern approach for Computer Vision on the web"><meta property="og:image" content="http://trackingjs.com/images/app/site_screenshot.jpg"><meta name="viewport" content="width=device-width, initial-scale=1"><title>iTeach' + ((opt_data.pageName) ? ' | ' + soy.$$escapeHtml(opt_data.pageName) : '') + '</title><link href="//fonts.googleapis.com/css?family=Roboto+Slab:400,300,100|Ubuntu" rel="stylesheet" type="text/css"><!-- build:css ' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/all.min.css --><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'bower/pure/pure-min.css"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/highlight.css"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/side-menu.css"><link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/main.css"><!-- endbuild --></head><body>changed!<div id="layout"><link rel="stylesheet" href="styles/home-grid.css">' + menu.side({baseDir: './', cssScope: 'index'}) + '<div id="main"><div class="header"><h1>iTeach</h1><h2>A modern approach for teaching languages</h2></div><div class="content"></div><div class="content"><form class="pure-form"><input type="text" class="pure-input-1 pure-input-rounded" placeholder="Search..."></form></div><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="content">' + index.examples({items: [{name: 'Study', description: 'A simple friend tagging application that is easy to build and friendly to use', image: 'images/app/study.jpg', url: './examples/study.html'}, {name: 'Practice', description: 'Go into the future and explore Campo Di Fiori in Italy by just moving your head in the desired direction', image: 'images/app/practice.jpg', url: './examples/practice.html'}, {name: 'Talk', description: 'Race against the clock using your own car wheel in this color iTeach game', image: 'images/app/talk.jpg', url: './examples/talk.html'}]}) + '</div><footer class="credits"><p>Made with <span class="love">♥</span> by teachers who care about their students.</p></footer></div></div><!-- build:js ' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/all.min.js --><script src="' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/side-menu.js"><\/script><!-- endbuild --></body></html>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
index.examples = function(opt_data, opt_ignored) {
  var output = '<div class="grid">';
  var itemList67 = opt_data.items;
  var itemListLen67 = itemList67.length;
  for (var itemIndex67 = 0; itemIndex67 < itemListLen67; itemIndex67++) {
    var itemData67 = itemList67[itemIndex67];
    output += '<figure class="effect"><img src="' + soy.$$escapeHtml(itemData67.image) + '" alt=""><figcaption><h2>' + soy.$$escapeHtml(itemData67.name) + '</h2><p>' + soy.$$escapeHtml(itemData67.description) + '</p><a href="' + soy.$$escapeHtml(itemData67.url) + '">View more</a></figcaption></figure>';
  }
  output += '</div>';
  return output;
};

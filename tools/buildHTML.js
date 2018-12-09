import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */
fs.readFile('client/index.html', 'utf8', (error, markup) => {
  if (error) {
    return console.log(error);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(error) {
    if (error) {
      return console.log(error);
    }
    console.log('index.html written to /dist'.green);
  });
});

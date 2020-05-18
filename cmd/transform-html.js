const fs = require('fs').promises;
const cheerio = require('cheerio');

const filename = `dist/b2b-client/index.html`

async function transform() {
  const indexFile = await fs.readFile(filename);

  const $ =  cheerio.load(indexFile);

  $('script').each(function(i, elem) {
    const link = $(this).attr('src');

    $(this).attr('src', `b2b-client/${link}`);
  });

  $('link').each(function(i, elem) {
    const link = $(this).attr('href');
    if (link.startsWith('https')) {
      return;
    }

    $(this).attr('href', `b2b-client/${link}`)
  });

  const result = $.html();

  await fs.writeFile(filename, result);
}

if (require.main === module) {
  transform()
    .catch(err => {
      console.log(err);
    });
}

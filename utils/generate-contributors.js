/**
 * version.atom generator that generates an atom based on
 * version.json output from MTGJSON.
 */
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

const fetchAndParse = async (endpoint) =>  {
  const result = await fetch(endpoint);
  return result.json();
}

(async () => {
  try {
    const checkLimit = await fetch('https://api.github.com/rate_limit');
    const limitJson = await checkLimit.json();

    if (limitJson.rate.remaining > 0) {
      const endpoints = [
        'https://api.github.com/repos/mtgjson/mtgjson/contributors',
        'https://api.github.com/repos/mtgjson/mtgjson-website/contributors',
        'https://api.github.com/repos/mtgjson/mtgsqlive/contributors'
      ];
      const results = await Promise.all(endpoints.map(fetchAndParse));
      const contribs = results.flat(1);
      // Only return unique contributors
      const contributors = Array.from(new Set(contribs.map(u => u.login))).map(login => {
        return {
          name: login,
          link: contribs.find(u => u.login === login).html_url,
          image: contribs.find(u => u.login === login).avatar_url
        };
      });

      fs.writeFileSync(`./docs/.vuepress/src/resources/contributors.json`, JSON.stringify(contributors));
    }
  } catch (err) {
    console.log(err);
    console.log('You have likely been rate limited by GitHub.');
  }
})();

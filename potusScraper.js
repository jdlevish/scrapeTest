const rp = require('request-promise')
const Cheerio = require('cheerio');
const potusParse = require('./potusParser');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url).then(function (html) {
    const $ = Cheerio.load(html)
    //success!
    const wikiUrls = []
    // console.log($('td > b > a', html).length);
    for (let i = 0; i < 46; i++) {
        wikiUrls.push($('td > b > a', html)[i].attribs.href)
    }

    return Promise.all(
        wikiUrls.map(function (url) {
            // console.log(url)
            return potusParse('https://en.wikipedia.org' + url);
        }))

}).then(function (presidents) {
    console.log(presidents);
})
    .catch(function (err) {
        // handle error
        console.log(err)
    })
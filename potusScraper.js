const rp = require('request-promise')
const Cheerio = require('cheerio');
const potusParse = require('./potusParser');
const url = 'https://www.acehotel.com/palmsprings/spa-and-swim-club/feel-good-spa/';

rp(url).then(function (html) {
    const $ = Cheerio.load(html)
    console.log(html);
    //success!
    // const wikiUrls = []
    // // console.log($('td > b > a', html).length);
    // for (let i = 0; i < 46; i++) {
    //     wikiUrls.push($('td > b > a', html)[i].attribs.href)
})

    //     return Promise.all(
    //         wikiUrls.map(function (url) {
    //             // console.log(url)

    //             return potusParse('https://en.wikipedia.org' + url);
    //         }))

    // }).then(function (presidents) {
    //     console.log(presidents);
    // })
    .catch(function (err) {
        // handle error
        console.log(err)
    })
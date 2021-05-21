const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/George_Washington';
const Cheerio = require('cheerio');
const potusParse = function (url) {
    return rp(url)
        .then(function (html) {
            const $ = Cheerio.load(html)
            // console.log($('.firstHeading', html).text());

            let bday = $('.bday', html)
            // console.log(bday[0].children[0].data)
            return {
                name: $('.firstHeading', html).text(),
                birthday: bday[0].children[0].data,
            }

        })
        .catch(function (err) {
            console.log(err);
        })
};

module.exports = potusParse;
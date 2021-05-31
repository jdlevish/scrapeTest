const puppeteer = require('puppeteer');
const Cheerio = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
    .launch()
    .then(function (browser) {
        return browser.newPage();
    })
    .then(function (page) {
        return page.goto(url).then(function () {
            return page.content();
        });
    })
    .then(function (html) {
        const $ = Cheerio.load(html)
        console.log($('h3', html)[0].children[0].data)

        const topStories = []
        for (let i = 0; i < $('h3', html).length; i++) {
            topStories.push($('h3', html)[i].children[0].data);
        }
        console.log(topStories);
    })
    .catch(function (err) {
        //handle error
    });//*[@id="t3_nopr2z"]/div[2]/article/div[1]/div[2]/div[1]/a/div/h3/text()
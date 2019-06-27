// const puppeteer = require('puppeteer');

// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com');
//   // await browser.close();
// });

const browser = require('./browser')

browser.render()
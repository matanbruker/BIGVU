const puppeteer = require("puppeteer");

const capture = async (url) => {
  try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); // go to website with the url
    await page.screenshot({ path: "./screenshot.png" }); // take screenshot png and save in working directory
    await browser.close();
    return true;
  } catch(e) { // in case the website is not available
    return false;
  }
  };

  exports.capture = capture;
const SearchPage = require('../pageobjects/search.page')
const ResultPage = require('../pageobjects/result.page')

describe('My Login application', () => {
    it('should search on google', async () => {
        await SearchPage.open();
        await SearchPage.search('selenium');

        await SearchPage.getLinkOfSecondResult().then(async (href) => {
            await SearchPage.openLinkInNewTab(href);
        });

        await ResultPage.checkBodyIsPresent();
        await ResultPage.checkTitle('Selenium');

        // const element = await browser.$("#search").$$("#rso [data-header-feature='0'] a")[0]
        // await element.waitForDisplayed(10000);
        // // click on the element to open in a new tab
        // await element.getAttribute('href').then(async (href) => {
        //     await browser.newWindow(href);
        // });

        // // wait for body is present
        // await browser.$('body').waitForExist(10000);

        // await expect(browser).toHaveTitleContaining('Selenium')

        await browser.pause(10000);
    })
})



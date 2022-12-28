const SearchPage = require('../pageobjects/search.page')
const ResultPage = require('../pageobjects/result.page')

describe('SANDBX Test Automation task', () => {
    it('should search on google and open second result in a new page', async () => {
        await SearchPage.open();
        await SearchPage.search('selenium');

        await SearchPage.getLinkOfSecondResult().then(async (href) => {
            await SearchPage.openLinkInNewTab(href);
        });

        await ResultPage.checkBodyIsPresent();
        await ResultPage.checkTitle('Selenium');

        // this command is to wait for 5 seconds to see the result in the browser
        // you can remove it if you want
        await browser.pause(5000);
    })
})





const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () {
        return $('input[name="q"]');
    }

    get btnSearch () {
        return $('input[type="submit"]');
    }

    get secondResult () {
        return $("#search").$$("#rso [data-header-feature='0'] a")[0]
    }



    /**
     * a method to encapsule automation code to interact with the page
     */
    async search (subject) {
        await this.inputSearch.waitForDisplayed(10000);
        await this.inputSearch.setValue(subject);
        await this.btnSearch.waitForDisplayed(10000);
        await this.btnSearch.click();
    }

    async getLinkOfSecondResult () {
        await this.secondResult.waitForDisplayed(10000);
        return await this.secondResult.getAttribute('href');
    }

    async openLinkInNewTab (href) {
        await browser.newWindow(href);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new SearchPage();

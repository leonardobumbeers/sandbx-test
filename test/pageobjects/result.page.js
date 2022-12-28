

class ResultPage {
    /**
     * define selectors using getter methods
     */
    get body (){
        return $('body');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async checkBodyIsPresent() {
        await this.body.waitForExist(10000);
    }

    async checkTitle(title) {
        await expect(browser).toHaveTitleContaining(title)
    }
}

module.exports = new ResultPage();

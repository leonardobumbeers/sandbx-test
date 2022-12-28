
# SANDBX - Test Automation 

In this repo, you will find a solution to a problem of SANDBX technical task.







I used Page Objects Model as a Design Pattern, to maintain the code and follow the best test automation practices.
### Prerequisites

The solution was built with [webdriverIO](https://webdriver.io/) automation test framework.

You need to have installed [Node.js](https://nodejs.org/en/download/) on your machine


### Installation

    1. Clone the repo
   ```sh
   git clone https://github.com/leonardobumbeers/sandbx-test.git
   ```
    2. Install NPM packages
   ```sh
   npm install
   ```
   
### Running Tests

It is configured to run the tests on Chrome and Firefox browsers

To run the tests, you need to run the following commands in the terminal


#### On Chrome

```bash
  npx wdio run wdio.conf.chrome.js
```

#### On firefox

```bash
  npx wdio run wdio.conf.firefox.js
```

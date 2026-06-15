const { Builder } = require("selenium-webdriver");

(async function(){
 let driver = await new Builder()
   .forBrowser('chrome')
   .build();

 await driver.get("https://google.com");
})();
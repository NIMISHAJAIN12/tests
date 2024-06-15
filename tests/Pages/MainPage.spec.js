// pages/MainPage.js

class MainPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToProfile() {
      await this.page.click('div[role="button"]');
      await this.page.click('svg[aria-label="Messenger"]');
      await this.page.waitForLoadState('networkidle');
      await this.page.click('//button[contains(text(),"Not Now")]');
    }
  }
  
  module.exports = MainPage;
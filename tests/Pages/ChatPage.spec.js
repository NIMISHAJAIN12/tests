// pages/ChatPage.js

class ChatPage {
  constructor(page) {
    this.page = page;
  }

  async sendMessage(username, message) {
    // Assuming you have already navigated to the chat page
    //await this.page.click(`//div[contains(text(),'Send message')]`);
    //await this.page.waitForLoadState('networkidle');
    //await this.page.fill('input[placeholder="Search..."]',username);
    //await this.page.click('//span[contains(text()="Nimisha Jain")]');
    //await this.page.click('//div[contains(text()="Chat")]');
    //await this.page.waitForLoadState('networkidle');
    await this.page.click('//div[@class="x13dflua x19991ni"]');
    await this.page.fill('//div[@aria-label="Message"]', message);
    await this.page.press('//div[@aria-label="Message"]', 'Enter');
    await this.page.waitForTimeout(2000);
    await this.page.click('(//a[@role="link"])[9]');
    await this.page.waitForTimeout(2000);
    await this.page.click('svg[aria-label="Options"]');
    await this.page.click('button:nth-child(6)');
  }
}

module.exports = ChatPage;

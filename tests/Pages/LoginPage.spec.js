// pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.instagram.com/accounts/login/');
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForNavigation();
  }
}

module.exports = LoginPage;

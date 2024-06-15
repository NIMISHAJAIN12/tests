

const { test,expect } = require('@playwright/test');
const LoginPage = require('C:/Users/jainn/.vscode/files/tests/Pages/LoginPage.spec.js');
const ChatPage = require('C:/Users/jainn/.vscode/files/tests/Pages/ChatPage.spec.js');
const MainPage = require('C:/Users/jainn/.vscode/files/tests/Pages/MainPage.spec.js');

test('Send message on Instagram', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('testing_qa12', 'osfin.ai@1234');

  const mainPage = new MainPage(page);
  await mainPage.navigateToProfile();

  const chatPage = new ChatPage(page);
  await chatPage.sendMessage('jain_nimisha12', 'Hello ,Congratulations!! You Did it :)');
});
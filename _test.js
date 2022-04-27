Feature('Puppeteer');

Scenario('test something', ({ I }) => {
    I.amOnPage('/')
    I.login('admin15@gmail.com', 'fsdfsdf');
    pause()
});

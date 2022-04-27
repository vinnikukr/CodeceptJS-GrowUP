Feature('Puppeteer');

Scenario('test something', ({ I }) => {
    I.amOnPage('/')
    I.userLogin('admin15@gmail.com', 'fsdfsdf');
    pause()
});

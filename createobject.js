var faker = require('faker');
var randomWord = faker.random.words(); // рандомное слово
console.log(randomWord);
var randomWord1 = faker.random.words(length=3); // рандомное слово
console.log(randomWord1);
var randomWord2 = faker.random.words(); // рандомное слово
console.log(randomWord2);
var randomWord3 = faker.random.words(); // рандомное слово
console.log(randomWord3);
var randomEmail = faker.internet.email();
console.log(randomEmail); 
var phoneNumber = Number(`9${Math.round(100000000 - 0.5 + Math.random() * (999999999 - 100000000 + 1))}`) // рандомное число
console.log(phoneNumber)                      
module.exports = {
    'Авторизация': function (browser) {
      browser
      .maximizeWindow()
        .pause(3000)
        .assert.visible('body')
        .url('https://iself-cloud.test.smartpetrol.ru/')
        .setValue('input.form-control', 'cssitemail@gmail.com')
        .setValue('input[type=password]', 'pass123')
        .click('button[type=submit]')
        .pause(5000)
        .assert.visible('body')
        .assert.visible('span.ml-2')
        .pause(3000)
    },
    'Создаем новый объект':function(browser){
        browser
        .useCss()
        .useXpath()
        .click("//BUTTON[@data-v-7d622f5c=''][text()=' Создать объект ']").pause(1000)
        .setValue("(//INPUT[@data-v-9a8153e0=''])[1]", randomWord1).pause(2000)
        .setValue("//INPUT[@data-v-41d3196f='']" , phoneNumber).pause(1000)
        .setValue("(//INPUT[@data-v-9a8153e0=''])[4]" , randomWord2).pause(1000)
        .setValue("(//INPUT[@data-v-9a8153e0=''])[8]" , phoneNumber).pause(1000)
        .useCss()
        .click('body.sidebar-opened:nth-child(2) div.container-fluid.p-0.m-0:nth-child(5) div.d-flex.bd-highlight div.flex-grow-1.bd-highlight.main div.main-container.mb-5 form.needs-validation div.row:nth-child(2) div.col-md-4:nth-child(3) div.row div.col-md-6:nth-child(2) div.form-group.mb-3:nth-child(1) div.date-picker:nth-child(2) > input.form-control.calendar-icon').pause(1000)
        .useXpath()
        .click("(//SPAN[@data-v-3d6d64d7=''][text()='19'][text()='19'])[1]").pause(1000)
        .click("(//BUTTON[@data-v-3d6d64d7=''][text()='Выбрать дату заключения'][text()='Выбрать дату заключения'])[1]").pause(1000)
        .setValue("(//INPUT[@data-v-9a8153e0=''])[2]" , randomEmail)
        .setValue("(//INPUT[@data-v-9a8153e0=''])[3]" , randomEmail)
        
        .click("(//INPUT[@aria-label='Search for option'])[3]") .pause(1000)
        .click("//BUTTON[@data-v-9a8153e0=''][text()=' Сохранить ']").pause(10000)
        .end() } } 

    

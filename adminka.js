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

'Проверяем админку':function(browser){
browser
.assert.title("iSelf Объекты")
.useXpath()
.assert.visible("//INPUT[@readonly='readonly']")
.assert.visible("//SPAN[@data-v-7d622f5c=''][text()=' Сотрудники ']")
.assert.visible("//SPAN[@data-v-7d622f5c=''][text()=' Справочники ']")
.assert.visible("//SPAN[@data-v-7d622f5c=''][text()=' История ']")
.assert.visible("//SPAN[@data-v-7d622f5c=''][text()=' Мониторинг ']")
.click("//INPUT[@readonly='readonly']").pause(500)
        .keys('\ue015').pause(1000)
        .keys('\ue015').pause(1000)
        .keys('\ue007').pause(1000)
        .setValue("//INPUT[@placeholder='Поиск']" , 'СМАРТ') .pause(1000)
        .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)
            .clearValue("//INPUT[@placeholder='Поиск']") .pause(1000)
            .setValue("//INPUT[@placeholder='Поиск']" , '7') .pause(500)
            .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)
            .click("//INPUT[@readonly='readonly']").pause(500)
        .keys('\ue015').pause(1000)
        .keys('\ue007').pause(1000)

           .click("//INPUT[@readonly='readonly']").pause(500)
           .keys('\ue015').pause(1000)
           .keys('\ue007').pause(1000)
           .clearValue("//INPUT[@placeholder='Поиск']") .pause(1000)
           .setValue("//INPUT[@placeholder='Поиск']" , '1') .pause(1500)
           .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)

           .click("//INPUT[@readonly='readonly']").pause(500)
           .keys('\ue015').pause(1000)
           .keys('\ue007').pause(1000)
           .clearValue("//INPUT[@placeholder='Поиск']") .pause(1000)
           .setValue("//INPUT[@placeholder='Поиск']" , 'СМАРТ') .pause(1500)
           .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)

           .click("//INPUT[@readonly='readonly']").pause(500)
           .keys('\ue015').pause(1000)
           .keys('\ue007').pause(1000)
           .clearValue("//INPUT[@placeholder='Поиск']") .pause(1000)
           .setValue("//INPUT[@placeholder='Поиск']" , '1162043915') .pause(1500)
           .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)

           .click("//INPUT[@readonly='readonly']").pause(500)
           .keys('\ue015').pause(1000)
           .keys('\ue015').pause(1000)
           .keys('\ue015').pause(1000)
           .keys('\ue007').pause(1000)
           .clearValue("//INPUT[@placeholder='Поиск']") .pause(1000)
           .setValue("//INPUT[@placeholder='Поиск']" , 'ул. Вятская, 69, Ростов-на-Дону, Ростовская обл., Россия, 344065') .pause(1500)
           .assert.visible("//SPAN[@data-v-1a25ac8a=''][text()='СМАРТ']").pause(300)
},

'Проверяем редактирование сотрудника':function(browser) {
    browser

           .click("//SPAN[@data-v-7d622f5c=''][text()=' Сотрудники ']") .pause(1000)
           .click("//INPUT[@data-v-bf2077ba='']") .pause(1000)
           .setValue("//INPUT[@data-v-bf2077ba='']" , 'newew test') .pause(1000)
           .click("//A[@data-v-a8326a88=''][text()=' редактировать ']") .pause(1000)
           .clearValue("(//INPUT[@data-v-41d3196f=''])[1]").pause(100)
           .setValue("(//INPUT[@data-v-41d3196f=''])[1]", 'Djohn').pause(400) 
           .clearValue("(//INPUT[@data-v-41d3196f=''])[6]").pause(100)
           .setValue("(//INPUT[@data-v-41d3196f=''])[6]" , 'Rambo').pause(300)
                .clearValue("(//INPUT[@data-v-41d3196f=''])[2]").pause(100)
                .setValue("(//INPUT[@data-v-41d3196f=''])[2]" , 'James').pause(1000)
           .click("//INPUT[@data-v-3d6d64d7='']") .pause(1000)
           .click("//SPAN[@data-v-3d6d64d7=''][text()='14']") .pause(1000)
           .click("//BUTTON[@data-v-3d6d64d7=''][text()='Указать дату рождения']") .pause(1000)
           .click("//BUTTON[@data-v-61b03936=''][text()=' Сохранить ']") .pause(1000)
},
'Проверяем справочники':function(browser){
    browser
    .useXpath()
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Справочники ']") .pause(500)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Валюта ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Виды оплат ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Оборудование ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Программы ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Тех параметры ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Журнал ТО ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Ошибки ']") .pause(500) 
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Проводки ']").pause(500)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Должности ']").pause(500)
},
'Проверяем поиск за весь период в Историях, сортировку по дату':function(browser){
    browser
    .useXpath()
    .click("//SPAN[@data-v-7d622f5c=''][text()=' История ']") .pause(1000)
    .click("//INPUT[@data-v-bf2077ba='']").pause(1000)
    .setValue("//INPUT[@data-v-bf2077ba='']" , 'Ипатов Павел ') .pause(1000)
    .click("//DIV[@data-v-62eeb3c2='']") .pause(500)
    .click("//DIV[@data-v-62eeb3c2='']") .pause(500)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Мониторинг ']").pause(1500)
},
'Проверяем архив':function(browser){
    browser
    .useXpath()
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Архив ']") .pause(1000)
    .click("(//SPAN[@data-v-7d622f5c=''][text()=' Сотрудники '][text()=' Сотрудники '])[2]") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Валюта ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Виды оплат ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Оборудование ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Программы ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Тех параметры ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Журнал ТО ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Ошибки ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Проводки ']") .pause(1000)
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Должности ']") .pause(1000)
},
'Проверяем редактирование в ЛК админки':function(browser) {
    browser
    .useXpath()
    .click("//SPAN[@id='userDropdownMenu']").pause(1000)
    .click("(//A[@data-v-784b748c=''])[2]").pause(1000)
    .click("//DIV[@data-v-09659a42=''][text()='Редактировать личные данные']").pause(1000)
    .clearValue("(//INPUT[@data-v-b138c296=''])[1]").pause(300)
    .setValue("(//INPUT[@data-v-b138c296=''])[1]" , 'Ипатов').pause(700)
    .clearValue("(//INPUT[@data-v-b138c296=''])[2]").pause(300)
    .setValue("(//INPUT[@data-v-b138c296=''])[2]" , 'Павел').pause(700)
    .clearValue("(//INPUT[@data-v-b138c296=''])[3]").pause(300)
    .setValue("(//INPUT[@data-v-b138c296=''])[3]" , 'Александрович').pause(500)
    .keys('\ue007').pause(1000)
    .end() } } 
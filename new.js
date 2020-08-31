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
    'Входим под владельцем автомойки':function(browser){
        browser
        .useXpath()
        .click("//SPAN[@data-v-7d622f5c=''][text()=' Объекты ']") .pause(1000)
        .click("//SPAN[@data-v-755d374c=''][text()='Онлайн']") .pause(1000)
        .click("//TD[@data-v-1a25ac8a=''][text()='1162043915']")
        .pause(3000)
        .useXpath()
        .click("(//BUTTON[@data-v-1a25ac8a=''][text()=' Вход '][text()=' Вход '])[4]")
        .useCss()
        .click('button[class="btn btn-primary impersonate-btn"]')
        .pause (5000)
        .click('button[class="swal2-confirm swal2-styled"]') 
        .pause (7000)
    }, 
'Проверяем раздел Тарифы и Акции':function(browser){
    browser
    .useXpath()
    .pause(5000)
        .click("//SPAN[@data-v-7d622f5c=''][text()=' Тарифы и акции ']").pause(2000)
        .click("(//DIV[@class='d-flex'])[1]").pause(1000)
        .click("//BUTTON[@class='btn btn-primary float-right mt-3'][text()=' Редактировать ']").pause(1000)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[1]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[2]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[3]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[4]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[5]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[6]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[7]") .pause(500)
        .click("(//SPAN[@data-v-49c49024=''][text()='ПН'][text()='ПН'])[8]") .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[3]") .pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[3]", '25') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[4]") .pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[4]", '20') .pause(500)


        .clearValue("(//INPUT[@data-v-49c49024=''])[5]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[5]" , '19').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[6]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[6]" , '22').pause(500)


        .clearValue("(//INPUT[@data-v-49c49024=''])[7]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[7]" , '19') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[8]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[8]" , '34') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[9]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[9]" , '18') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[10]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[10]" , '15') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[11]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[11]" , '17').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[12]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[12]" , '311').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[13]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[13]" , '16') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[14]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[14]" , '32') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[15]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[15]" , '44') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[16]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[16]" , '55') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[17]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[17]" , '66') .pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[18]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[18]" , '77') .pause(500)

        .click("//BUTTON[@data-v-49c49024=''][text()='Сохранить ']").pause(1000)
        .click("//BUTTON[@type='button'][text()='OK']") .pause(500)
        .click("//DIV[@class='additional'][text()=' Доп. оборудование ']") .pause(1000)
        .click("//BUTTON[@class='btn btn-primary float-right mt-3'][text()=' Редактировать ']").pause(1000)

        .clearValue("(//INPUT[@data-v-49c49024=''])[3]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[3]" , '4').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[4]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[4]" ,'5').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[5]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[5]" , '6').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[6]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[6]" , '7').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[7]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[7]" , '8').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[8]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[8]" , '9').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[9]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[9]" , '10').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[10]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[10]" , '11').pause(500)

        .click("//DIV[@data-v-49c49024=''][text()=' Акция 2 ']").pause(1000)

        .clearValue("(//INPUT[@data-v-49c49024=''])[3]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[3]" , '4').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[4]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[4]" ,'5').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[5]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[5]" , '6').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[6]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[6]" , '7').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[7]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[7]" , '8').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[8]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[8]" , '9').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[9]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[9]" , '10').pause(500)

        .clearValue("(//INPUT[@data-v-49c49024=''])[10]").pause(500)
        .setValue("(//INPUT[@data-v-49c49024=''])[10]" , '11').pause(500)
        .click("//BUTTON[@data-v-49c49024=''][text()='Сохранить ']") .pause(500)
        .click("//BUTTON[@type='button'][text()='OK']").pause(500)


},
'Номенклатура и цены':function(browser){
    browser
    .useXpath()
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Номенклатура и цены ']").pause(1000) 
    .click("//BUTTON[@data-v-8302cbf0=''][text()=' Добавить номенклатуру ']").pause(1000) 
    .setValue("(//INPUT[@data-v-41d3196f=''])[1]" , 'TestT 1.1') .pause(500)
    .setValue("(//INPUT[@data-v-41d3196f=''])[2]" , '1337') .pause(500)
    .setValue("(//INPUT[@data-v-41d3196f=''])[3]" , '100').pause(500)
    .setValue("(//INPUT[@data-v-41d3196f=''])[4]" , '59').pause(500)
    .click("//BUTTON[@data-v-6cb7bccc=''][text()=' Добавить ']") .pause(1000)
},
'Проверяем поиск в тех.параметрах':function(browser){
    browser
    .useXpath()
    .click("//SPAN[@data-v-7d622f5c=''][text()=' Тех параметры ']") .pause(500)
            .click("//INPUT[@data-v-bf2077ba='']").pause(500)
            .setValue("//INPUT[@data-v-bf2077ba='']", 'на входе').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)
    
            .setValue("//INPUT[@data-v-bf2077ba='']", 'магистраль').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .setValue("//INPUT[@data-v-bf2077ba='']", 'емкость').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .setValue("//INPUT[@data-v-bf2077ba='']", '70').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .setValue("//INPUT[@data-v-bf2077ba='']", '50').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .setValue("//INPUT[@data-v-bf2077ba='']", '100').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .setValue("//INPUT[@data-v-bf2077ba='']", 'бокс 1').pause(500)
            .clearValue("//INPUT[@data-v-bf2077ba='']").pause(500)

            .click("//A[@data-v-16ae27a1=''][text()=' Выгрузить Excel']").pause(500)
            .keys('\ue007').pause(500)

    .end()
}} 
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
        .pause(3000)
        .useXpath()
        .click("(//TD[@data-v-1a25ac8a=''])[123]").pause(1000)
        .click("(//BUTTON[@data-v-1a25ac8a=''][text()=' Вход '][text()=' Вход '])[4]").pause(1000)
        .useCss()
        .click('button[class="btn btn-primary impersonate-btn"]')
        .pause (5000)
        .click('button[class="swal2-confirm swal2-styled"]') 
        .pause (3000)
        .useXpath()
    },
'работа с ЛК':function(browser){
    browser
                .click("//SPAN[@id='userDropdownMenu']")
                .pause(1000)
        .click("(//A[@data-v-784b748c=''])[3]")
                .pause(1000)
                .click("//BUTTON[@data-v-09659a42=''][text()=' Пополнить ']") .pause(1000)
                .click("//INPUT[@data-v-556eeef9='']") .pause(1000)
                .clearValue("//INPUT[@data-v-556eeef9='']") .pause(1000)
                .setValue("//INPUT[@data-v-556eeef9='']" , '1') .pause(1000)
                .click("//BUTTON[@data-v-bef23cc4=''][text()='Подтвердить ']") .pause(1000)
                    .click("//BUTTON[@type='button'][text()='OK']") .pause(1000)
        
                .click("//A[@href='/profile-lk/my-objects'][text()=' Мои объекты ']") .pause(1000)
                    .click("(//DIV[@data-v-5bb596ef=''])[7]") .pause(1000)
                .click("//A[@href='/profile-lk/schedule'][text()=' График работы ']") .pause(1000)
                    
                .click("//A[@href='/profile-lk/shift-change'][text()=' Пересмена ']") .pause(1000)
        
                .click("//A[@href='/profile-lk/bank-receipts'][text()=' Банковские поступления ']") .pause(1000)
                .click("(//INPUT[@data-v-41d3196f=''])[1]")
                .setValue("(//INPUT[@data-v-41d3196f=''])[1]" , 'Тест')
                .click("//INPUT[@data-v-3d6d64d7='']")
                .click("//BUTTON[@data-v-3d6d64d7=''][text()='Указать дату поступления']")

                    .setValue("(//INPUT[@data-v-41d3196f=''])[2]" , '10') .pause(1000)
                        .click("(//INPUT[@readonly='readonly'])[3]") .pause(2000)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                        .keys('\uE015') .pause(500)
                         .keys('\ue007') .pause(500)
        
                         .click("//BUTTON[@data-v-1d4b4956=''][text()=' Подтвердить ']") .pause(2000)
                         .click("//BUTTON[@data-v-5c5d7270=''][text()=' Подтвердить ']") .pause(3500)
                         .click("(//INPUT[@data-v-17afe1c0=''])[1]") .pause(1000)
                         .click("//BUTTON[@data-v-17afe1c0=''][text()='Пополнить ']") .pause(1000)
                         .click("//BUTTON[@data-v-17afe1c0=''][text()='Зачислить ']") .pause(4000)
        
                         
                .click("//SPAN[@id='userDropdownMenu']")
                .pause(1000)
                    .click("(//A[@data-v-784b748c=''])[3]") .pause(2000)
                .click("//A[@href='/profile-lk/bonuses'][text()=' Бонусы ']")   .pause(2000)  
        .click("//INPUT[@aria-label='Search for option']").pause(1000)
        .setValue("//INPUT[@aria-label='Search for option']" , '000 003 620').pause(1000)
                    .keys('\uE015') .pause(500)
                             .keys('\ue007') .pause(500)
        
        .click("//INPUT[@data-v-41d3196f='']") .pause(1000)
             .setValue("//INPUT[@data-v-41d3196f='']" , '1').pause(1000)
             .click("//BUTTON[@data-v-77dce118=''][text()='Пополнить ']").pause(1000)
             .click("//BUTTON[@data-v-210b6060=''][text()='Подтвердить ']").pause(1000)
        
    
            .click("//A[@href='/profile-lk/bonuses'][text()=' Бонусы ']") .pause(1000)
            .click("//A[@href='/profile-lk/costs'][text()=' Добавить расход ']") .pause(1000)
    
    
                .end() } } 
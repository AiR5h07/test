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
        .pause (3000)
        .useXpath()
    },
    'Сортировка в финансах':function(browser) {
        browser 
/** * Проверяем сортировку в Свободном суточном отчете */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Финансы ']") .pause (2000)
    .click("(//TH[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[7]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[7]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[8]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[8]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[9]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[9]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//SPAN[@data-v-62eeb3c2=''])[5]") .pause(1000)
    .click("(//SPAN[@data-v-62eeb3c2=''])[5]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[10]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[10]") .pause(1000)

   .click("(//DIV[@data-v-62eeb3c2=''])[11]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[11]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[4]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[4]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[5]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[5]") .pause(1000)
    },
    'Сортировка в Инкассации':function(browser){
        browser

/** * Проверяем сортировку в Инкассации */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Инкассации ']") .pause(2000)

    .click("(//TH[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[3]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[3]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
    },
    'Сортировка в кассе':function(browser) {
        browser
     /** * Проверяем сортировку в Кассе */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Касса ']") .pause(2000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[8]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[8]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[10]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[10]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[12]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[12]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[14]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[14]") .pause(1000)
    },

    'Сортировка в Терминале':function(browser){
        browser
/**Проверяем сортировку в Терминал ATLAS */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Терминал ATLAS ']") .pause(2000)

    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[3]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[3]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[5]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[5]") .pause(1000)
    },

    'Сортировка в Боксах':function(browser){
        browser
/**Проверяем сортировку в Боксах */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Боксы ']") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
    },

    'Сортировка  в доп.оборудовании':function(browser){
        browser

    /**Проверяем сортировку в Доп.оборудовании */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Доп. оборудование ']") .pause(1000)
    
            .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

            .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)
            .click("(//TH[@data-v-62eeb3c2=''])[2]") .pause(1000)

            .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)

            .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)

            .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)

            .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

            .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
            .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
    },

            'Сортировка в оплате ЛК':function(browser) {
            browser
/**Проверка сортировки в Оплате личного кабинета */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Оплата личный кабинет ']") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
            },

            'Сортировк в Бонусах':function(browser) {
                browser
/**Проверка сортировки в Бонусах */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Бонусы ']") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
            },

            'Проверка сортировки в расходах':function(browser){
                browser
    /** Проверка сортировки в Расходах */
.click("//SPAN[@data-v-7d622f5c=''][text()=' Расходы ']") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)

    .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)
    .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)
            },
            'Проверка сортировки в Недостача / Излишки':function(browser){
                browser
    /**Проверка сортировки в Недостача / Излишки */

.click("//SPAN[@data-v-7d622f5c=''][text()=' Недостача / Излишки ']") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[1]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[3]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[4]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[5]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[6]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[7]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[8]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[8]") .pause(1000)

        .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
        .click("(//DIV[@data-v-62eeb3c2=''])[2]") .pause(1000)
    },
    'Проверяем сортировку в Проводках':function(browser) {
        browser 

        /**Проверяем сортировку в Проводках */
                         .click("//SPAN[@data-v-7d622f5c=''][text()=' Проводки ']") .pause (1000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' ДАТА / ВРЕМЯ ']") .pause(1500)
        .click("//SPAN[@data-v-62eeb3c2=''][text()=' ДАТА / ВРЕМЯ ']") .pause(1500)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(1500)
            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(1500)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' НАЧИСЛЕНО ']") .pause(1500)
        .click("//SPAN[@data-v-62eeb3c2=''][text()=' НАЧИСЛЕНО ']") .pause(1500)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(1500)
    .click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(1500)

    .click("//SPAN[@data-v-62eeb3c2=''][text()=' ВОЗВРАТ ИЗ КАССЫ ']") .pause(1000)
    .click("//SPAN[@data-v-62eeb3c2=''][text()=' ВОЗВРАТ ИЗ КАССЫ ']") .pause(1000)
    },
    'Проверяем сортировку в клиентах':function(browser) {
        browser 

                         .click("//SPAN[@data-v-7d622f5c=''][text()=' Клиенты ']") .pause (1000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' № КАРТЫ ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' № КАРТЫ ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' ДВИЖЕНИЕ ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' ДВИЖЕНИЕ ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' БЛОК ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' БЛОК ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)

.click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)
.click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)

                        .click("//SPAN[@data-v-7d622f5c=''][text()=' Группы клиентов ']") .pause (1000)


                        .click("//SPAN[@data-v-7d622f5c=''][text()=' Группы клиентов ']") .pause(2000)

                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)
            
                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' СОСТАВ ГРУППЫ ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' СОСТАВ ГРУППЫ ']") .pause(2000)
            
                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)
            
                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОПОЛНЕНО ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОПОЛНЕНО ']") .pause(2000)
            
                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)
            
                        .click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)



                            .click("//SPAN[@data-v-7d622f5c=''][text()=' Удаленные карты ']") .pause(1000)
                            .click("//LABEL[@data-v-349bcda8=''][text()=' всего в базе ']") .pause(1000)

                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' № КАРТЫ ']") .pause(2000)
                                 .click("//SPAN[@data-v-62eeb3c2=''][text()=' № КАРТЫ ']") .pause(2000)
            
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ДВИЖЕНИЕ ']") .pause(2000)
                                    .click("//SPAN[@data-v-62eeb3c2=''][text()=' ДВИЖЕНИЕ ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)
                                    .click("//SPAN[@data-v-62eeb3c2=''][text()=' СКИДКА ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' БЛОК ']") .pause(2000)
                                    .click("//SPAN[@data-v-62eeb3c2=''][text()=' БЛОК ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)
                                     .click("//SPAN[@data-v-62eeb3c2=''][text()=' ГРУППА ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(2000)
                                     .click("//SPAN[@data-v-62eeb3c2=''][text()=' ПОСТУПИЛО ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)
                                    .click("//SPAN[@data-v-62eeb3c2=''][text()=' СПИСАНО ']") .pause(2000)
            
                            .click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)
                                    .click("//SPAN[@data-v-62eeb3c2=''][text()=' БАЛАНС ']") .pause(2000)
    .end() } } 
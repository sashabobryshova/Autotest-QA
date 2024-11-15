describe('проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин , ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль , ввели правильный пароль
         cy.get('#loginButton').click(); // нашли кнопку войти, активировали
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить что авторизация прошла успешно и виден текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
        })

    it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');  // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // наличие кнопки восстановить пароль и корректность ее цвета
         cy.get('#forgotEmailButton').click(); //активировали кнопку - восстановить пароль 
         cy.get('#mailForgot').type('german@dolnikov.ru'); //нашли поле ввести эмайл , ввели почту
         cy.get('#restoreEmailButton').contains('Отправить код'); //имеется кнопка с текстом _отправить код
         cy.get('#restoreEmailButton').click(); //активировать кнопку - отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // виден текст пользователю - Успешно отправили пароль на e-mail
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
        })

        it('Негативный кейс авторизации Неправильный пароль', function () {
            cy.visit('https://login.qa.studio/');  // зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин , ввели правильный логин
            cy.get('#pass').type('iLoveqastudio2'); // нашли поле пароль , ввели НЕправильный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти, активировали
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить что авторизация НЕ прошла и виден текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
           })

           it('Негативный кейс авторизации Неправильный логин', function () {
            cy.visit('https://login.qa.studio/');  // зашли на сайт
            cy.get('#mail').type('german@dolnik.ru'); // нашли поле логин , ввели НЕправильный логин
            cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль , ввели правильный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти, активировали
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить что авторизация НЕ прошла и виден текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
           })

           it('Негативный кейс валидации - авторизации логин без @', function () {
            cy.visit('https://login.qa.studio/');  // зашли на сайт
            cy.get('#mail').type('germandolnik.ru'); // нашли поле логин , ввели почту без @
            cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль , ввели правильный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти, активировали
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверить что авторизация НЕ прошла и виден текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
           })

           it('проверка на приведение строчных букв', function () {
            cy.visit('https://login.qa.studio/');  // зашли на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашли поле логин , ввели логин не строчными буквами
            cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль , ввели правильный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти, активировали
            get('#messageHeader').contains('Авторизация прошла успешно'); //проверить что авторизация прошла успешно и виден текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователям 
           })

 })
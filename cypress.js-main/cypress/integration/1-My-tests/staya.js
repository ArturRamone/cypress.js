describe('Проверка авторизации', function () {

     it('Позитивный кейс.Авторизация с правильным логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('arthur_music@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Rock55star55');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');



        })

  


     })
   describe('Проверка авторизации', function () {

     it('Негативный кейс.Авторизация с правильным логином и неправильным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('arthur_music@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Rock77star77');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.'); 

     })

  })
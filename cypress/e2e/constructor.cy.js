import { URL } from '../../src/utils/apiConst'
describe('service is available', function() {
    before(() => {
        cy.visit('/')
        cy.intercept('GET', `${URL}/ingredients`, { fixture: 'ingredients.json' }).as('getIngredients')
    })
    it('ingredients should be available', function() {
        cy.wait('@getIngredients')
    });
});
describe('modals is working correctly', function() {
    it('modal opened correctly', function() {
        cy.get('[data-card="0"]').click();
        cy.contains('Детали ингредиента');
    });
    it('modal closed correctly via close button', function() {
        cy.get('[data-button="closeButton"]').click();
        cy.contains('Детали ингредиента').should('not.exist');
    });
    it('modal closed correctly via esc button', function() {
        cy.get('[data-card="0"]').click();
        cy.contains('Детали ингредиента');
        cy.get('body').type('{esc}');
        cy.contains('Детали ингредиента').should('not.exist');
    });
    it('modal closed correctly via overlay click', function() {
        cy.get('[data-card="0"]').click();
        cy.contains('Детали ингредиента');
        cy.get('[data-modal="modal-overlay"]')
            .click(0, 0); 
            // переводим клик в левый верхний угол, потому что иначе
            // клик делается в область модального окна, а не в фон
        cy.contains('Детали ингредиента').should('not.exist');
    });
});
describe(`drag'n'drop is working correctly`, function() {
    it('bun dropped into a container successfully', function() {
        cy.get('[data-card="0"').trigger('dragstart')
        cy.get('[data-drop="drop"]').trigger('drop')
        // на месте ли обе булки после дропа
        cy.contains('Булка 1 (верх)')
        cy.contains('Булка 1 (низ)')
        // увеличился ли счётчик у нашей булки
        cy.get('[data-card="0"').within(() => {
            cy.get('.counter').should('exist')
            cy.get('.counter p').should('contain', '2'); 
          });
    });
    it('ingredient dropped into a container successfully', function() {
        cy.get('[data-card="1"').trigger('dragstart')
        cy.get('[data-drop="drop"]').trigger('drop')
        // на месте ли ингредиент после дропа
        cy.get('[data-drop="drop"]').within(() => {
            cy.get('span').should('contain', 'Ингредиент 1')
        })
        // увеличился ли счётчик у нашего ингредиента
        cy.get('[data-card="1"').within(() => {
            cy.get('.counter').should('exist')
            cy.get('.counter p').should('contain', '1'); 
        });
    });
    it('ingredients swapped successfully', function() {
        // добавляем второй ингредиент
        cy.get('[data-card="2"').trigger('dragstart')
        cy.get('[data-drop="drop"]').trigger('drop')
        // на месте ли ингредиент после дропа
        cy.get('[data-drop="drop"]').within(() => {
            cy.get('span').should('contain', 'Ингредиент 2')
        })
        // свапаем
        cy.get('[data-consitem').first().as('item_1')
        cy.get('[data-consitem').last().as('item_2')
        cy.get('@item_1').trigger('dragstart')
        cy.get('@item_2').trigger('drop')
        // проверяем: первый элемент должен соответствовать @item_2 и наоборот
        cy.get('@item_1').should('contain', 'Ингредиент 2')
        cy.get('@item_2').should('contain', 'Ингредиент 1')
        // должен удалиться ингредиент 1
        cy.get('@item_2').within(() => {
            cy.get('.constructor-element__action').click()
        })
        cy.get('[data-drop="drop"]').contains('Ингредиент 1').should('not.exist');
    });
})
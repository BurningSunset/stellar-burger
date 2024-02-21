import { URL } from '../../src/utils/apiConst'

const title = 'Детали ингредиента'
const bun = {
    sel: '[data-card="0"]',
    name: 'Булка 1'
}
const ing_1 = {
    sel: '[data-card="1"]',
    name: 'Ингредиент 1'
}
const ing_2 = {
    sel: '[data-card="2"]',
    name: 'Ингредиент 2'
}
const dropZone = '[data-drop="drop"]'

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
        cy.get(bun.sel).click();
        cy.contains(title);
    });
    it('modal closed correctly via close button', function() {
        cy.get('[data-button="closeButton"]').click();
        cy.contains(title).should('not.exist');
    });
    it('modal closed correctly via esc button', function() {
        cy.get(bun.sel).click();
        cy.contains(title);
        cy.get('body').type('{esc}');
        cy.contains(title).should('not.exist');
    });
    it('modal closed correctly via overlay click', function() {
        cy.get(bun.sel).click();
        cy.contains(title);
        cy.get('[data-modal="modal-overlay"]')
            .click(0, 0); 
            // переводим клик в левый верхний угол, потому что иначе
            // клик делается в область модального окна, а не в фон
        cy.contains(title).should('not.exist');
    });
});
describe(`drag'n'drop is working correctly`, function() {
    it('bun dropped into a container successfully', function() {
        cy.get(bun.sel).trigger('dragstart')
        cy.get(dropZone).trigger('drop')
        // на месте ли обе булки после дропа
        cy.contains(`${bun.name} (верх)`)
        cy.contains(`${bun.name} (низ)`)
        // увеличился ли счётчик у нашей булки
        cy.get(bun.sel).within(() => {
            cy.get('.counter').should('exist')
            cy.get('.counter p').should('contain', '2'); 
          });
    });
    it('ingredient dropped into a container successfully', function() {
        cy.get(ing_1.sel).trigger('dragstart')
        cy.get(dropZone).trigger('drop')
        // на месте ли ингредиент после дропа
        cy.get(dropZone).within(() => {
            cy.get('span').should('contain', ing_1.name)
        })
        // увеличился ли счётчик у нашего ингредиента
        cy.get(ing_1.sel).within(() => {
            cy.get('.counter').should('exist')
            cy.get('.counter p').should('contain', '1'); 
        });
    });
    it('ingredients swapped successfully', function() {
        // добавляем второй ингредиент
        cy.get(ing_2.sel).trigger('dragstart')
        cy.get(dropZone).trigger('drop')
        // на месте ли ингредиент после дропа
        cy.get(dropZone).within(() => {
            cy.get('span').should('contain', ing_2.name)
        })
        // свапаем
        cy.get('[data-consitem').first().as('item_1')
        cy.get('[data-consitem').last().as('item_2')
        cy.get('@item_1').trigger('dragstart')
        cy.get('@item_2').trigger('drop')
        // проверяем: первый элемент должен соответствовать @item_2 и наоборот
        cy.get('@item_1').should('contain', ing_2.name)
        cy.get('@item_2').should('contain', ing_1.name)
        // должен удалиться ингредиент 1
        cy.get('@item_2').within(() => {
            cy.get('.constructor-element__action').click()
        })
        cy.get(dropZone).contains(ing_1.name).should('not.exist');
    });
})
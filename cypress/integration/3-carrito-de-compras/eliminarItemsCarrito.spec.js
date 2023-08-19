describe('Carrito de Compras - Actualización Correcta', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })
  
    it('Se agrega un Ítem de Phones y se elimina', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Phones').click()
      cy.wait(1000);
      cy.contains('Nokia lumia 1520').click()
      cy.wait(1000);
      cy.contains('Add to cart').click()
      cy.wait(1000);

      cy.on('window:alert', (textoAlerta) => {
        expect(textoAlerta).to.equal('Product added');
      
        cy.get('body').then(($body) => {
          if ($body.find('button').text() === 'Aceptar') {
            cy.get('button').click();
          }
        });
      });
      
      cy.get('#cartur').click()
      cy.get('td').contains('Nokia lumia 1520').should('have.length', 1);

      cy.get('tr.success').find('td:last-child a').contains('Delete').click();
      cy.wait(1000);
      cy.contains('Nokia lumia 1520').should('not.exist');      
    })
})
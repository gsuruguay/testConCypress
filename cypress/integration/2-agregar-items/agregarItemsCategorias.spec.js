describe('Agregar un Ítem de Cada Categoría', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })
  
    it('Se agrega un Ítem de Phones', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Phones').click()
      cy.contains('Nokia lumia 1520').click()
      cy.contains('Add to cart').click()

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
    })

    it('Se agrega un Ítem de Laptops', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Laptops').click()
      cy.contains('Sony vaio i7').click()
      cy.contains('Add to cart').click()

      cy.on('window:alert', (textoAlerta) => {
        expect(textoAlerta).to.equal('Product added');
      
        cy.get('body').then(($body) => {
          if ($body.find('button').text() === 'Aceptar') {
            cy.get('button').click();
          }
        });
      });

      cy.get('#cartur').click()
      cy.get('td').contains('Sony vaio i7').should('have.length', 1);
    })

    it('Se agrega un Ítem de Monitors', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Monitors').click()
      cy.contains('ASUS Full HD').click()
      cy.contains('Add to cart').click()

      cy.on('window:alert', (textoAlerta) => {
        expect(textoAlerta).to.equal('Product added');
      
        cy.get('body').then(($body) => {
          if ($body.find('button').text() === 'Aceptar') {
            cy.get('button').click();
          }
        });
      });

      cy.get('#cartur').click()
      cy.get('td').contains('ASUS Full HD').should('have.length', 1);
    })
})
describe('Flujo de Checkout con Visualización de Número de Tarjeta', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })

    let numeroTarjeta = "123456789";
  
    it('Se realiza la compra de una Laptop', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Laptops').click()
      cy.wait(1000);
      cy.contains('MacBook air').click()
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
      cy.get('td').contains('MacBook air').should('have.length', 1);
      
      cy.contains('button.btn.btn-success', 'Place Order').click();
      
      cy.get('#orderModalLabel').contains('Place order');      
      cy.get('input#name').type('Nombre Test');
      cy.get('input#country').type('Pais Test');
      cy.get('input#city').type('Ciudad Test');
      cy.get('input#card').type(numeroTarjeta);
      cy.get('input#month').type('06');
      cy.get('input#year').type('28');
      cy.contains('button.btn.btn-primary', 'Purchase').click();
      cy.get('p.lead.text-muted').contains(numeroTarjeta);
    })
})
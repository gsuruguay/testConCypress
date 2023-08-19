describe('Agregar varias categorías', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })
  
    it('Click en la categoría Phones', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Phones').click()
      cy.wait(1000);
      cy.get('#tbodyid')
      cy.contains('Samsung galaxy s6')
    })

    it('Click en la categoría Laptops', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Laptops').click()
      cy.wait(1000);
      cy.get('#tbodyid')
      cy.contains('Sony vaio i5')
    })

    it('Click en la categoría Monitors', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Monitors').click()
      cy.wait(1000);
      cy.get('#tbodyid')
      cy.contains('Apple monitor 24')
    })
})
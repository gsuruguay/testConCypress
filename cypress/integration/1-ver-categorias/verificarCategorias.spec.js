describe('Agregar varias categorías', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })
  
    it('Click en la categoría Phones', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Phones').click()
      cy.get('#tbodyid').should('be.visible')
      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('have.text', 'Samsung galaxy s6')
    })
    
    it('Click en la categoría Laptops', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Laptops').click()
      cy.get('#tbodyid').should('be.visible')
      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('have.text', 'Sony vaio i5')
    })
    
    it('Click en la categoría Monitors', () => {
      cy.get('#cat').contains('CATEGORIES')
      cy.contains('#itemc','Monitors').click()
      cy.get('#tbodyid').should('be.visible')
      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('have.text', 'Apple monitor 24')
    })
})
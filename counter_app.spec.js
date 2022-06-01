/// <reference types="cypress" />

context('launch app', () => {
    beforeEach(() => {
cy.visit('http://localhost:3000/')
})
it ('Select an item', () => {
    // click on the + for the first item
    cy.get('.fa-plus-circle').eq(0).click()
    //Confirm the item quantity is 1 now not Zero
    cy.get('span.badge').eq(1).should('not.contain', 'Zero')
    })

    it ('Reduce the quantity of an item', () => {
        // Seleect 2 of the second item
        cy.get('.fa-plus-circle').eq(1).dblclick()
        //Confirm the item quantity is 2 now not Zero
        cy.get('span.badge').eq(2).should('contain', '2')
        //reduce the item by 1
        cy.get('.fa-minus-circle').eq(1).click()
        //Confirm the item quantity has now reduced to 1 from 2
        cy.get('span.badge').eq(2).should('contain', '1')
   })


        context('Confirm the quantity in shopping cart', () => {
            it('Confirm the quantity in shopping cart', () => {
                // call the shopping cart function from command.js
              cy.addAllItemToShoppingcart()
               //Confirm the items in the shorting cart is 4 
             cy.get('.badge-pill').eq(0).should('contain', '4')

            })
       })

    context('Confirm reduction in shopping cart', () => {
        it('Confirm reduction in shopping cart', () => {
            // call the shopping cart function from command.js
          cy.addAllItemToShoppingcart()
          // delete the first item
          cy.get('.btn-danger').eq(1).click()
          cy.get('.badge-pill').eq(0).should('have.text', 3) 
          //=> {
          //  const text = $badge.text()
            //expect(text).should('be.lt', 4)
    })
   })

   context('Empty cart and confirm the - icon button state', () => {
    it('Empty cart and confirm the - icon button state', () => {
        // call the shopping cart function from command.js
      cy.addAllItemToShoppingcart()
      // click the refresh button
      cy.get('.btn-success').click()
      //assert that the shopping cart is empty
      cy.get('.badge-pill').eq(0).should('have.text', 0)
      cy.get('.fa-minus-circle').should('not.be.enabled')

     })

   })  

    it('Reload page and assert no of listed items returns to 4 after item deletion', () => {
     // delete the first item
      cy.get('.btn-danger').eq(1).click()
      cy.reload()
      //Confirm the 
      cy.get('button.btn-danger').should('have.length', 4)



})
})
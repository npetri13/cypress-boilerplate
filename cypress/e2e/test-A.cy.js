describe('Test button functionality', () => {
  it('Test + and -', () => {
    cy.visit('http://localhost:8000')

    // initial value
    cy.contains('0')
    
    // increment
    for (let x = 0; x < 5; x++) {
      cy.contains('+').click()
    }
    cy.contains('5')

    // decrement
    cy.contains('-').click()
    cy.contains('4')
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');

    cy.contains("No results found").should('not.exist');

    cy.contains('Search').should('exist');

    cy.get('input').type('pikachu');
    cy.get('#search').click();

    cy.get("img").should('exist');

    cy.get('input').clear().type('invalidsearchterm');
    cy.get('#search').click();

    cy.contains("No results found").should('exist');
  });
});

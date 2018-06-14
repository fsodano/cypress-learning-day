describe('Loads the catalog page and populates products', function () {

  before(function () {
    cy.visit('http://localhost:8080');
  });

  it('Should show a loading icon before loading the catalog products', function () {
    cy.get('.loading').should('exist');
  });

  it('Should load products', function () {
    const expectedAmountOfProducts = 24;
    cy.get('#catalog img').should('have.length', expectedAmountOfProducts);
  });

});

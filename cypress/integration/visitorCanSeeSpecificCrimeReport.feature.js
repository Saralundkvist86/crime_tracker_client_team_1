describe("Visitor can see crime content", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/data",
      response: "fixture:data.json",
    });
    cy.visit("/");
  });

  it("shows crime report content", () => {
    cy.get('[data-cy="data-174460"]').within(() => {
      cy.get('[data-cy="teaser"]').click();
      cy.get('[data-cy="content"]').should("be.visible");
    });
  });
});

describe("Visitor can see crime teasers", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/data",
      response: "fixture:data.json",
    });
    cy.visit("/");
  });

  it("visitor can see teaser title", () => {
    cy.get('[data-cy="header"]').should(
      "contain",
      "Log in to read the entire crime report"
    );
  });

  it("shows first teaser", () => {
    cy.get('[data-cy="data-174460"]').within(() => {
      cy.get('[data-cy="teaser"]').should(
        "contain",
        "Pressmeddelande angående eventuellt mord i Äppelbo"
      );
    });
  });
});

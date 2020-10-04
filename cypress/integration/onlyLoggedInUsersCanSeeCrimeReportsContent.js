describe("user can see crime reports content", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/data",
      response: "fixture:data.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com",
      },
    });

    cy.visit("/");
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
  });

  it("user can click 'read more' button and crime reports content gets rendered", () => {
    cy.get("[data-cy='read-more']").contains("Read more").click();
    cy.get('[data-cy="data-174460"]').within(() => {
      cy.get('[data-cy="content"]').should("be.visible");
    });
  });
});

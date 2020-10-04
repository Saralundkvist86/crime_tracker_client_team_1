describe("user can see crime reports content", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/data",
      response: "fixture:data.json",
    });
    cy.visit("/");
  });

  it("if authenticated successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com",
      },
    });

    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "You're logged in as: user@mail.com");

    cy.get('[data-cy="data-174460"]').within(() => {
      cy.get('[data-cy="teaser"]').click();
      cy.get('[data-cy="content"]').should("be.visible");
    });
  });

  it("if authenticated unsuccessfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false,
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrongpassword");
      cy.get("button").contains("Submit").click();
    });

    cy.get("#message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );

    cy.get('[data-cy="data-174460"]').within(() => {
      cy.get('[data-cy="teaser"]').click();
      cy.get('[data-cy="content"]').should("not.exist");
    });
  });
});

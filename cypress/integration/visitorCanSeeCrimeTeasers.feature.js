describe("Visitor can see crime teasers", () => {
    before(() => {
      //  cy.server();
       // cy.route({
    //        method: 'GET',
      //      url:'http://localhost:3000/api/v1/', //Link from backend!
        //    response: 'fixture:teasers_index.json'
        //})
        cy.visit('/')
    })

    it('visitor can see teaser title', () => {
        cy.get('[data-cy="header"]').should('contain', 'Teaser List')
    });

/*    it("shows first teaser", () => {
        cy.get("[data-cy=teaser-1]").within(() => {
            cy.contains(""); // Title for teaser
            cy.contains(""); // Teaser description
            cy.get("button").should("contain", "Read more").click()
        });
    });

    it("shows second teaser", () => {
        cy.get("[data-cy=teaser-2]").within(() => {
            cy.contains("");
            cy.contains("");
            cy.get("button").should("contain", "Read more").click()
        });
    });
    */
});

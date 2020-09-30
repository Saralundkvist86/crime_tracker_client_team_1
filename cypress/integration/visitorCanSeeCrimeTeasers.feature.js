describe("Visitor can see crime teasers", () => {
    before(() => {
        cy.server();
        cy.route({
            method: 'GET',
            url:'http://localhost:3000/api/v1/teasers', //Link from backend!
            response: 'fixture:teasers_index.json'
        })
        cy.visit('/')
    })

    it('visitor can see teaser title', () => {
        cy.get('[data-cy="header"]').should('contain', 'Teaser List')
    });

    it("shows first teaser", () => {
        cy.get("[data-cy=teaser-1]").within(() => {
            cy.contains("Robbery in gothenburg"); 
            cy.contains("A man robbed a student of his wallet.");
            cy.get("button").should("contain", "Read more").click()
        });
    });

    it("shows second teaser", () => {
        cy.get("[data-cy=teaser-2]").within(() => {
            cy.contains("Robbery in Kista");
            cy.contains("A woman got her cellphone stolen in the Kista subway station.");
            cy.get("button").should("contain", "Read more").click()
        });
    });
});

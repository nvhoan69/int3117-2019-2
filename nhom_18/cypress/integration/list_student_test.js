
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe('Actions', () => {
    beforeEach(() => {
        cy.login();
    })

    it("test view students list of an empty class", () => {
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5d96f9b5ec4e443482b3c2f2/students");


    })

    it("test view students list of the class that has 4 students", () => {
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5d96f188ec4e443482b3be6f/students");

    })


})
import Header from "../support/pageObjects/Header";



describe('temp', () => {
    const header = new Header()


    beforeEach(() => {
        cy.visit('https://winparts-stage.europe-west1.gcp.storefrontcloud.io/')
        cy.handleCookies()

    })

    it('temp', () => {
        // Arrange

        // Act
        header.search('oil')

        // Assert
        cy.url().should('include', 'search?q=oil')
    })


})
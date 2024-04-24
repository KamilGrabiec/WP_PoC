class Header {

    search(text) {
        // body of the function
        cy.get('[data-testId="search-bar"]').eq(0).type(text)
        cy.get('[data-testid="search"]').eq(0).click()
    }






}


export default Header
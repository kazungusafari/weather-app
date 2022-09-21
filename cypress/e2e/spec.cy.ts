
describe('Weather App', () => {
  it('User cannot get historical and current weather of a city', () => {
    //Visit the app
    //Type in the city name
    //Click on the search button
    //Assert that the historical  and current weather is displayed
    cy.visit('http://localhost:3000')
    cy.get('input').type('London')
    cy.get('button').click()
    cy.get('p').should('contain', 'Could not fetch weather data')
    cy.findByRole('link', { name: /view search history/i }).click()
    cy.findByText(/no search history found/i)
  })
})
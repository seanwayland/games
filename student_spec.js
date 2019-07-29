/**
 * STUDENTS - this is where you should put your Cypress tests for the last two tasks
 */
describe("The student's tests", function() {

    it('loads in the browser', function() {
        cy.visit('/') // change URL to match your dev URL
    })

});


describe('Button 0', function () {
    it('It should display a simple message that says "Hello there! Nice to meet you!"', function () {
        cy.get('#button0').click();
        cy.get('#renderhere').within($form => {
            cy.get('button').should('be.visible');
            cy.get("#renderhere").contains("Hello there! Nice to meet you!").should('be.visible');
        })
    })

    });


describe('Button 1', function () {
    it('should render a number input field, a button, and how many times I have guessed (0)', function () {
        cy.get('#button1').click();
        cy.get('#renderhere').within($form => {
            cy.get('input[type="email"]').should('be.visible');
            cy.get('button').should('be.visible');
            cy.get('span[data-output="name"]').contains('Enter your name and email address below to subscribe to email alerts').should('be.visible');
        })

    })

    });

it('should not let me enter nothing into the text field', function () {
    cy.get('#renderhere button')
        .contains('jbarlin2@une.edu.au')
        .click();
    cy.get('#renderhere label')
        .should('not.exist');
});




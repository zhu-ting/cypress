describe('List items', () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it('properly displays completed items', () => {
        cy.get('.todo-list li',)
          .filter('.completed')
          .should('have.length', 1)
          .and('contain', 'Capsicum')
          .find('.toggle')
          .should('be.checked')
    })

    it('Shows remaining todos in the footer', () => {
        cy.get('.todo-count')
          .should('contain', 3)
    })

    it('Remove a todo', () => {
        cy.route({
            url: '/api/todos/1',
            method: 'DELETE',
            status: 200,
            response: {}
        })
        cy.get('.todo-list li')
          .as('list')

        cy.get('@list')
          .first()
          .find('.destroy')
          .invoke('show')
          .click({ force: true })

        cy.get('@list')
          .should('have.length', 3)
          .and('not.contain', 'milk')
          
    })

    it.only('Marks an incomplete item complete', () => {
      cy.fixture('todos')
        .then(todos => {
          const target = Cypress._.head(todos);
          cy.route(
            'PUT',
            `/api/todos/${target.id}`,
            Cypress._.merge(target, { isCompleted: true })
          )
        })

        cy.get('.todo-list li')
          .first()
          .as('first-todo')

        cy.get('@first-todo')
          .find('.toggle')
          .click()
          .should('be.checked')

        cy.get('@first-todo')
          .should('have.class', 'completed')

        cy.get('@first-todo')
          .should('contain', 2)

    })
})
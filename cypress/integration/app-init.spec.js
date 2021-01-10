const todos = [
    {
        "id": 1,
        "name": "Buy Milk",
        "isCompleted": false
    },
    {
        "id": 2,
        "name": "Buy Eggs",
        "isCompleted": false
    },
    {
        "id": 3,
        "name": "Buy Bread",
        "isCompleted": false
    },
    {
        "id": 4,
        "name": "Buy Capsicum",
        "isCompleted": false
    }
]

describe('App initialization', () => {
    it.only('Loads todos on page load', () => {
        cy.server()
        cy.route('GET', '/api/todos', todos)
        cy.visit('/')

        cy.get('.todo-list li')
          .should('have.length', 4)
          
    })
})
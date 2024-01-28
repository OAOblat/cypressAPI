const users = require("../fixtures/users.json");

describe("API Testing", () => {
  it("create user", () => {
    cy.createUser(users.user1);
    cy.getUser(users.user1).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(users.user1);
    });
  });

  it("update user", () => {
    cy.createUser(users.user2);
    cy.updateUser(users.user2, users.userUpdate);
    cy.getUser(users.user2).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql(users.userUpdate);
    });
  });

  it("delete user", () => {
    cy.createUser(users.user3);
    cy.deleteUser(users.user3);
    cy.getUser(users.user3).then((response) => {
      expect(response.status).be.eql(404);
    });
  });
});

const users = require("../fixtures/users.json");

describe("API Testing", () => {
  it("create user", () => {
    cy.createUser(users.user1);
    cy.getUser(users.user1).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(users.user1);
    });
  });

  describe("update and delete user", () => {
    beforeEach(() => {
      cy.createUser(users.user1);
    });

    it("update user", () => {
      cy.updateUser(users.user1, users.userUpdate);
      cy.getUser(users.user1).then((response) => {
        expect(response.status).be.eq(200);
        expect(response.body).be.eql(users.userUpdate);
      });
    });

    it("delete user", () => {
      cy.deleteUser(users.user1);
      cy.getUser(users.user1).then((response) => {
        expect(response.status).be.eql(404);
      });
    });
  });
});

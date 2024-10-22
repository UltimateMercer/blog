describe("Articles", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/blog", { timeout: 120000 });
  });

  it("successfully loads", () => {
    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");
  });

  it("access an article", () => {
    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");

    cy.get("#list_articles").should("exist").and("be.visible");
  });
});

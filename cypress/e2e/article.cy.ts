describe("Articles", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/blog", { timeout: 120000 });
  });

  it("successfully loads", () => {
    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");
  });

  it("access an article and then return to home page", () => {
    let initialPath;
    let articlePath;

    cy.location("pathname").then((path) => {
      initialPath = path;
    });

    console.log("#############################################");
    console.log(initialPath);

    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");

    cy.get("#list_articles").should("exist").and("be.visible");

    cy.get("#list_articles a").should("have.length.gt", 0);

    cy.get("#list_articles a").first().click();

    cy.location("pathname").then((path) => {
      articlePath = path;
    });

    console.log("#############################################");
    console.log(articlePath);

    cy.get("#main_article").should("exist").and("be.visible");
  });

  it("access an article", () => {});
});

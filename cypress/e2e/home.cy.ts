/// <reference path="../cypress.d.ts" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/", { timeout: 120000 });
  });

  it("successfully loads", () => {
    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");
    // cy.get('[data-testid="article-card"]').should('exist');
  });

  it("displays the correct title based on language", () => {
    // Check English title
    cy.get("#heading_articles").should("contain", "Articles");

    cy.get("#lang-toggle-trigger").click();
    cy.get("#lang-toggle-pt").click();

    cy.get("#heading_articles").should("contain", "Artigos");
  });

  it("switches theme", () => {
    cy.get("#theme-toggle-trigger").click();
    cy.get("#theme-toggle-dark").click();

    cy.get("html").should("have.class", "dark");
  });

  // it("renders articles", () => {
  //   cy.get('[data-testid="article-card"]').should("have.length.gt", 0);
  // });

  // it('displays "No articles found" when there are no articles', () => {
  //   cy.window().then((win) => {
  //     // Create a new type that extends Window with our custom 'app' property
  //     type AppWindow = Window & {
  //       app: {
  //         getArticles: () => any[];
  //       };
  //     };

  //     // Assert that 'win' is of type AppWindow
  //     // This tells TypeScript that 'win' has the 'app' property we need
  //     const appWindow = win as unknown as AppWindow;

  //     // Now we can safely stub the getArticles method
  //     // This replaces the actual implementation with one that returns an empty array
  //     cy.stub(appWindow.app, "getArticles").returns([]);
  //   });

  //   // Reload the page to see the effect of our stubbed method
  //   cy.reload();

  //   // Check if the "No articles found" message is visible
  //   cy.contains("No articles found").should("be.visible");
  // });

  // it("switches language and updates content", () => {
  //   // Assuming you have a language switcher component
  //   cy.get('[data-testid="language-switcher"]').click();
  //   cy.get('[data-testid="pt-br-option"]').click();

  //   // Check if the title has changed
  //   cy.get("h1").should("contain", "Artigos");

  //   // Check if article content has updated (assuming you have a title in Portuguese)
  //   cy.get('[data-testid="article-card"]')
  //     .first()
  //     .should("contain", "Título em Português");
  // });
});

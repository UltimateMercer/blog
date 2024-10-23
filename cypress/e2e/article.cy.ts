import { ar } from "date-fns/locale";

describe("Articles", () => {
  let initialHref: string = "";
  let articleHref: string = "";
  let oldArticleHref: string = "";

  beforeEach(() => {
    cy.visit("http://localhost:3000/blog", { timeout: 120000 });
  });

  it("successfully loads", () => {
    cy.get("#heading_articles", { timeout: 60000 }).should("be.visible");
  });

  it("access an article then return to home page", () => {
    cy.location("href").then((href) => {
      initialHref = href;
    });

    cy.get("#list_articles").should("exist").and("be.visible");

    cy.get("#list_articles a").should("have.length.gt", 0);

    cy.get("#list_articles a").first().click();

    cy.get("#main_article").should("exist").and("be.visible");

    cy.location("href").then((href) => {
      articleHref = href;
      expect(articleHref).to.not.equal(initialHref);
    });

    cy.get("#main_article").should("exist").and("be.visible");

    cy.get("#return_btn").should("exist").and("be.visible");

    cy.get("#return_btn").click();

    cy.location("href").then((href) => {
      expect(href).to.eq(initialHref);
    });
  });

  it("access an article, change language and then return to home page", () => {
    cy.location("href").then((href) => {
      initialHref = href;
    });

    cy.get("#list_articles").should("exist").and("be.visible");

    cy.get("#list_articles a").should("have.length.gt", 0);

    cy.get("#list_articles a").last().click();

    cy.get("#main_article").should("exist").and("be.visible");

    cy.location("href").then((href) => {
      articleHref = href;
      expect(articleHref).to.not.equal(initialHref);
    });

    cy.get("#lang-toggle-trigger").click();
    cy.get("#lang-toggle-pt").click();

    oldArticleHref = articleHref;

    cy.location("href").then((href) => {
      articleHref = href;
      expect(articleHref).to.not.equal(oldArticleHref);
    });

    cy.get("#main_article").should("exist").and("be.visible");

    cy.get("#return_btn").should("exist").and("be.visible");

    cy.get("#return_btn").click();

    cy.location("href").then((href) => {
      expect(href).to.eq(initialHref);
    });
  });
});

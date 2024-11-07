import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import Home from "../../app/page";
import { useLanguageStore } from "@/store/useLanguageStore";

// ... rest of your code ...

jest.mock("@/store/useLanguageStore", () => ({
  useLanguageStore: jest.fn(),
}));

jest.mock("@/services", () => ({
  getArticles: ({ lang }: { lang: string }) =>
    [
      {
        title: "Understanding Design Systems",
        slug: "en-us/design-systems-overview",
        lang: "en-us",
      },
      {
        title: "Getting Started with JavaScript",
        slug: "en-us/getting-started-with-javascript",
        lang: "en-us",
      },
      {
        title: "Modern Backend Development with Node.js and NestJS",
        slug: "en-us/modern-backend-development",
        lang: "en-us",
      },
      {
        title: "Entendendo Design Systems",
        slug: "pt-br/design-systems-overview",
        lang: "pt-br",
      },
      {
        title: "Introdução ao JavaScript",
        slug: "pt-br/getting-started-with-javascript",
        lang: "pt-br",
      },
      {
        title: "Desenvolvimento Backend Moderno com Node.js e NestJS",
        slug: "pt-br/modern-backend-development",
        lang: "pt-br",
      },
    ].filter((article) => article.lang === lang),
}));

describe("Home component", () => {
  beforeEach(() => {
    jest.mocked(useLanguageStore).mockReturnValue({
      language: "en-us",
    });
  });

  it("renders a heading - en-us", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Latest articles" })
    ).toBeDefined();
  });

  it("renders a heading - pt-br", () => {
    jest.mocked(useLanguageStore).mockReturnValue({
      language: "pt-br",
    });
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Últimos artigos" })
    ).toBeDefined();
  });
});

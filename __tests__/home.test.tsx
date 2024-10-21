import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../app/page";
import { useLanguageStore } from "@/store/useLanguageStore";
// import { getArticles } from "@/services";

vi.mock("@/services", () => ({
  getArticles: ({ lang }) =>
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
    vi.mock("@/store/useLanguageStore", () => ({
      useLanguageStore: vi.fn(),
    }));
  });

  it("renders a heading - en-us", async () => {
    vi.mocked(useLanguageStore).mockReturnValue({
      language: "en-us",
    });
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Articles" })
    ).toBeDefined();
  });

  it("renders a heading - pt-br", async () => {
    vi.mocked(useLanguageStore).mockReturnValue({
      language: "pt-br",
    });
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Artigos" })
    ).toBeDefined();
  });
});

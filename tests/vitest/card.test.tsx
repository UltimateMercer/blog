import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "../../components/card";

vi.mock("@/components/date-format", () => ({
  FormatFullDate: vi.fn(({ date }) => date),
}));

// ... import any necessary mock components or utilities ...

const defaultProps = {
  title: "The Future of AI: Advancements and Challenges",
  description: "Explore the latest developments",
  date: "2023-05-15 12:00:00",
  tags: ["AI", "Technology", "Ethics"],
  image: "default-image.jpg",
  slug: "future-of-ai",
};

describe("Card Component", () => {
  it("renders with default props", () => {
    render(<Card {...defaultProps} />);

    expect(
      screen.getByText("The Future of AI: Advancements and Challenges")
    ).toBeDefined();
    expect(screen.getByText(/Explore the latest developments/)).toBeDefined();
    expect(screen.getByText("2023-05-15 12:00:00")).toBeDefined();
    expect(
      screen.getByAltText("The Future of AI: Advancements and Challenges")
    ).toBeDefined();
    expect(screen.getAllByText("AI")).toHaveLength(1);
    expect(screen.getAllByText("Technology")).toHaveLength(1);
    expect(screen.getAllByText("Ethics")).toHaveLength(1);
  });

  it("renders with custom props", () => {
    const customProps = {
      title: "Custom Title",
      description: "Custom description",
      date: "2024-01-01 12:00:00",
      tags: ["Custom", "Tags"],
      image: "custom-image.jpg",
      slug: "custom-slug",
    };

    render(<Card {...customProps} />);

    expect(screen.getByText("Custom Title")).toBeDefined();
    expect(screen.getByText("Custom description")).toBeDefined();
    expect(screen.getByText("2024-01-01 12:00:00")).toBeDefined();
    expect(screen.getByAltText("Custom Title")).toBeDefined();
    expect(screen.getAllByText("Custom")).toHaveLength(1);
    expect(screen.getAllByText("Tags")).toHaveLength(1);
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("blog/custom-slug");
  });
});

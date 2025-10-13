import { render, screen, fireEvent } from "@testing-library/react";
import PortfolioCard from "@/components/ui/PortfolioCard";

// Mock Next.js components
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

jest.mock("next/link", () => {
  return function MockLink({ href, children, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

const mockProps = {
  title: "Test Project",
  description: "This is a test project description",
  image: "/test-image.jpg",
  technologies: ["React", "TypeScript", "Next.js"],
  category: "Web",
  year: "2024",
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/test",
  teamSize: 3,
  featured: true,
  slug: "test-project",
};

describe("PortfolioCard", () => {
  it("renders the portfolio card with all props", () => {
    render(<PortfolioCard {...mockProps} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test project description")
    ).toBeInTheDocument();
    expect(screen.getByText("Web")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("3 members")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("renders technology tags", () => {
    render(<PortfolioCard {...mockProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

  it("renders action buttons when URLs are provided", () => {
    render(<PortfolioCard {...mockProps} />);

    const allLinks = screen.getAllByRole("link");
    const demoLink = allLinks.find(
      (link) => link.getAttribute("href") === "https://demo.com"
    );
    const githubLinkByHref = allLinks.find(
      (link) => link.getAttribute("href") === "https://github.com/test"
    );

    expect(githubLinkByHref).toHaveAttribute("href", "https://github.com/test");
    expect(demoLink).toHaveAttribute("href", "https://demo.com");
  });

  it("handles multiple images correctly", () => {
    const multipleImagesProps = {
      ...mockProps,
      image: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    };

    render(<PortfolioCard {...multipleImagesProps} />);

    // Should show navigation dots
    const dots = screen.getAllByRole("button");
    expect(dots).toHaveLength(5); // 2 arrows + 3 dots
  });

  it("does not render featured badge when featured is false", () => {
    const nonFeaturedProps = { ...mockProps, featured: false };
    render(<PortfolioCard {...nonFeaturedProps} />);

    expect(screen.queryByText("Featured")).not.toBeInTheDocument();
  });

  it("shows correct team size text for single member", () => {
    const singleMemberProps = { ...mockProps, teamSize: 1 };
    render(<PortfolioCard {...singleMemberProps} />);

    expect(screen.getByText("1 member")).toBeInTheDocument();
  });

  it("limits technology tags display to 4", () => {
    const manyTechProps = {
      ...mockProps,
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Jest",
        "Node.js",
      ],
    };

    render(<PortfolioCard {...manyTechProps} />);

    expect(screen.getByText("+2 more")).toBeInTheDocument();
  });
});

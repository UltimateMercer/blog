import React from "react";
import dynamic from "next/dynamic";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { highlight } from "sugar-high";

function Table({ data }: any) {
  const headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));

  const rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const headingElements: Record<string, React.ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

function createHeading(level: number) {
  const Element = headingElements[level];
  return ({ children }: any) => {
    const slug = slugify(children);
    return (
      <Element id={slug}>
        <a href={`#${slug}`} className="anchor" key={`link-${slug}`} />
        {children}
      </Element>
    );
  };
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
  Table,
  wrapper: ({ components, layout, ...rest }: any) => {
    const Layout = dynamic(() => import(`./article-layouts/${layout}`));
    return <Layout {...rest} />;
  },
};

export const MDXComponents = ({ layout, code, ...rest }: any) => {
  const Component = useMDXComponent(code);
  return <Component layout={layout} components={components} {...rest} />;
};

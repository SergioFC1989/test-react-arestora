import React from "react";

/**
 * ThreadHtml component renders HTML content safely.
 *
 * @param {Object} props - The component props.
 * @param {string} props.htmlContent - The HTML content to be rendered.
 * @returns {JSX.Element} The rendered HTML content.
 */
export const HtmlContentViewer = ({ htmlContent }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

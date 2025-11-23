// src/utils/formatAIResponse.js
/**
 * Formats raw AI text into clean, structured Markdown for beautiful rendering.
 * Focuses on creating clear headings, lists, and properly fenced code blocks.
 * @param {string} text - The raw text response from the AI.
 * @returns {string} The structured Markdown output.
 */
export function formatAIResponse(text = "") {
  if (typeof text !== "string") return "";

  let formatted = text
    // 1. Initial Cleanup: Normalize newlines and trim whitespace
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n") // Condense 3 or more newlines into just two
    .trim();

  // --- Structural Enhancement (Becomes H2/H3/Lists) ---

  // 2. Headings (H2/H3): Convert bold, isolated lines or lines ending with a colon (:)
  // This creates clear section titles for better scannability.
  formatted = formatted.replace(
    /^\s*([A-Z][^.\n]{10,70}[.:])\s*$/gm, // Lines 10-70 chars, starting with Cap, ending with colon/period
    (match, p1) => {
      // Use H3 for standard sections, H2 for potentially main topic titles
      return `\n\n## ${p1.trim().replace(/[:.]?$/, '')}\n`; // Remove trailing colon/period
    }
  );

  // 3. Convert ALL simple lists (a number followed by a period or * / -)
  // into proper Markdown format ensuring a newline precedes them.
  // This is crucial for list rendering.
  formatted = formatted.replace(
    /(^|\n)\s*(\d+\.|[*\-+]|•)\s+(.*)/g,
    (match, p1, p2, p3) => {
        // Ensure there is always a double newline before a new list starts (or a single if it's the start of the text)
        const prefix = p1 === '\n' ? '\n' : '\n\n';
        // Add one space after the bullet/number for clean Markdown
        return `${prefix}${p2.trim()} ${p3.trim()}`;
    }
  );

  // 4. Force paragraph separation: Add double newlines after sentences
  // for a clearer visual break between thoughts.
  formatted = formatted.replace(/([.!?])\s*(?=[A-Z])/g, "$1\n\n");

  // --- Code Block Management (The most beautiful part) ---

  // 5. Fix Broken HTML/CSS/JS Code Blocks (Most robust fix)
  // Ensure that embedded code blocks are properly fenced with language tags.
  const codeFixes = [
    { regex: /(<html[\s\S]*?<\/html>)/gi, lang: "html" },
    { regex: /(<style[\s\S]*?<\/style>)/gi, lang: "css" },
    { regex: /(<script[\s\S]*?<\/script>)/gi, lang: "javascript" },
    // General cleanup for simple text that looks like code blocks (e.g., JSON, configuration)
    { regex: /(\{[^]*\})|(\[.*\])/s, lang: "json" }, 
  ];

  for (const { regex, lang } of codeFixes) {
    formatted = formatted.replace(
      regex,
      (match) => `\n\n\`\`\`${lang}\n${match.trim()}\n\`\`\`\n\n`
    );
  }

  // 6. Blockquotes: Convert lines starting with a common quote character (e.g., > or even just a long dash)
  formatted = formatted.replace(
    /^(\s*[\>])\s+(.*)$/gm, 
    (match, p1, p2) => `\n\n> ${p2.trim()}\n`
  );

  return formatted.trim();
}
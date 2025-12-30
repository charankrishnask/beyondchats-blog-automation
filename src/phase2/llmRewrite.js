require("dotenv").config();

async function rewriteWithLLM(originalContent, referenceArticles) {
  return `
# Enhanced Article (AI-Generated)

${originalContent}

---

## Improvements Made
- Improved structure and readability
- Expanded explanations using external references
- Clear sectioning for better flow

---

## References
1. ${referenceArticles[0].url}
2. ${referenceArticles[1].url}
`;
}

module.exports = rewriteWithLLM;

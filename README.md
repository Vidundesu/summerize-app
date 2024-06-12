## Features

- **Text Summarization:** Condense articles to their key points.
- **Paragraph Count Specification:** Users can specify the number of paragraphs they want the summary to be. 

## Usage

### Summarize an Article

To summarize an article, simply provide the text and the desired number of paragraphs for the summary.

#### Example:

```python
from summarizer import summarize

# Your article text
article_text = """
Your long article text goes here...
"""

# Specify the number of paragraphs for the summary
paragraph_count = 3

# Get the summary
summary = summarize(article_text, paragraph_count=paragraph_count)

print(summary)

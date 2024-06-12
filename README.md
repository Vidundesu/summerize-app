## Features

- **Text Summarization:** Condense articles to their key points.
- **Paragraph Count Specification:** Users can specify the number of paragraphs they want the summary to be. 

## Usage

### Summarize an Article

To summarize an article, provide the URL of the article and the desired number of paragraphs for the summary.

#### Example:

```javascript
import React, { useState } from 'react';
import { useLazyGetSummaryQuery } from './path-to-your-api-slice';

const ArticleSummarizer = () => {
  const [articleUrl, setArticleUrl] = useState('');
  const [articleLength, setArticleLength] = useState(3); // Default to 3 paragraphs
  const [trigger, { data: summary, isFetching, error }] = useLazyGetSummaryQuery();

  const handleFetchSummary = () => {
    trigger({ articleUrl, articleLength });
  };

  return (
    <div>
      <input
        type="text"
        value={articleUrl}
        onChange={(e) => setArticleUrl(e.target.value)}
        placeholder="Enter article URL"
      />
      <input
        type="number"
        value={articleLength}
        onChange={(e) => setArticleLength(Number(e.target.value))}
        placeholder="Number of paragraphs"
      />
      <button onClick={handleFetchSummary}>Get Summary</button>
      {isFetching && <p>Loading...</p>}
      {error && <p>Error fetching summary: {error.message}</p>}
      {summary && (
        <div>
          <h2>Article Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleSummarizer;

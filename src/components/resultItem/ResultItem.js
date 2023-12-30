import React, { useState } from 'react';
import '../../assets/styles/ResultItem.scss';

const ResultItem = ({ result }) => {
    const [showHtml, setShowHtml] = useState(false);

    const toggleShowHtml = () => setShowHtml(!showHtml);

    return (
        <div className="result-item">
            <h4>Keyword: {result.keyword}</h4>
            <p>Total Search Results: {result.total_results}</p>
            <p>Number of AdWords: {result.adwords_count}</p>
            <p>Number of Links: {result.link_count}</p>
            <button onClick={toggleShowHtml}>
                {showHtml ? 'Hide HTML Code' : 'Show HTML Code'}
            </button>
            {showHtml && <pre className="html-code">{result.html_code}</pre>}
        </div>
    );
};

export default ResultItem;

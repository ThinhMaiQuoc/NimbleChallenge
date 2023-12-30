import React, {  useState } from 'react';
import axios from 'axios';
import '../../assets/styles/SearchReport.scss';

const SearchReport = () => {
    const [query, setQuery] = useState('');
    const [searchInsights, setSearchInsights] = useState({});

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await axios.get(`/search-report/report?query=${encodeURIComponent(query)}`);

            const insights = calculateSearchInsights(response.data);
            console.log(insights);
            setSearchInsights(insights);

        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    const calculateSearchInsights = (searchData) => {
        let totalSearches = searchData.length;
        let totalAdWordsCount = 0;

        searchData.forEach(result => {
            totalAdWordsCount += result.adwords_count;
        });

        return {
            totalSearches,
            totalAdWordsCount,
        };
    }

    return (
        <div className="search-reports-container">
            <input
                type="text"
                placeholder="Enter keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div className="search-insights">
                <h3>Search Insights</h3>
                <div className="insight-item">
                    <span className="insight-label">Total Searches:</span>
                    <span className="insight-value">{searchInsights.totalSearches}</span>
                </div>
                <div className="insight-item">
                    <span className="insight-label">Total AdWords Count:</span>
                    <span className="insight-value">{searchInsights.totalAdWordsCount}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchReport;

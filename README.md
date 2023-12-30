Project Name: NimbleChallengeBE
Overview
NimbleChallengeBE is a backend service designed to support a web application for extracting and analyzing data from Google search results. This service handles user authentication, keyword management, data scraping, and provides insightful analytics.

Features
1. User Authentication
Sign Up: Users can register an account using their email, username, and password.
Sign In: Users can log in to their account to access the application.
2. Keyword Management
Upload Keywords: Authenticated users can upload a CSV file containing keywords (up to 100).
Keyword Processing: Each keyword is used to search on Google, and the results are stored in the database.
3. Data Scraping
Scraping Search Results: For each keyword, the application scrapes the first page of Google search results and stores:
Number of AdWords advertisers on the page.
Total number of links on the page.
Total search results count for the keyword.
HTML content of the page.
4. Data Visualization
Keyword List: Users can view a list of their uploaded keywords and corresponding search result information.
Search Reports: Provides a feature to search across all reports and returns aggregate information like total searches, AdWords count, etc.
5. Additional Features
API Endpoints: Besides the web interface, certain functionalities are also accessible through RESTful API endpoints.
Missing Features
Unit Tests: Currently, the project does not include unit tests. This is a critical aspect that needs to be implemented for ensuring the reliability and stability of the application.
Technology Stack
Node.js: Server-side JavaScript runtime.
Express: Web application framework for Node.js.
PostgreSQL: Relational database management system.
Knex.js: SQL query builder for JavaScript.
Bull: Queue system for handling data scraping tasks.
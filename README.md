## 📘 Phase Documentation

- [Phase 1 – Backend & Scraping](./README.md)
- [Phase 2 – Automated Article Enhancement](./src/phase2/README.md)
- Phase 3 – React Frontend (In Progress)

📘 Phase 1 – Blog Scraping & CRUD APIs
📌 Overview

Phase 1 focuses on building a backend system that scrapes blog articles from the BeyondChats Blogs section and exposes CRUD APIs to manage those articles.

This phase establishes the data foundation that will later be enhanced and automated using external sources and LLMs in Phase 2.

🎯 Objectives

    Scrape blog articles from the BeyondChats website

    Identify and store the oldest available blog articles

    Persist article data in a database

    Provide RESTful CRUD APIs to manage articles

    Ensure the system is modular and extensible for future phases

🌐 Data Source

Blogs URL: https://beyondchats.com/blogs/

⚙️ Technology Stack
Layer	                Technology
Runtime	                Node.js
Backend Framework	    Express.js
Database	            MongoDB (Atlas)
ORM	                    Mongoose
Scraping	            Axios + Cheerio
Environment Config	    dotenv

🧩 Architecture Diagram
+-----------------------+
| BeyondChats Blog Site |
| https://beyondchats   |
+----------+------------+
           |
           |  HTTP Request (Axios)
           v
+-----------------------+
| Blog Scraper Script   |
| (Cheerio-based)       |
| src/scripts/          |
+----------+------------+
           |
           | Parsed Article Metadata
           v
+-----------------------+
| MongoDB Database      |
| Articles Collection  |
+----------+------------+
           |
           | REST APIs
           v
+-----------------------+
| Express API Server    |
| /api/articles         |
+-----------------------+
           |
           | JSON Responses
           v
+-----------------------+
| API Consumers         |
| (Postman / Frontend) |
+-----------------------+

🔄 Data Flow Explanation

1. he scraper script sends an HTTP request to the BeyondChats blogs page.

2. Blog article links are extracted from the statically available HTML.

3. The oldest available articles are identified programmatically.

4. Extracted article metadata (title, URL, placeholder content) is stored in MongoDB.

5. The Express server exposes CRUD APIs to:

    Create articles

    Retrieve all articles

    Retrieve a single article

    Update an article

    Delete an article

6. APIs return JSON responses consumable by tools like Postman or a frontend application.

📝 Scraping Note (Important)

The BeyondChats blog is built using client-side rendering (CSR).
When accessed via static HTTP requests (Axios + Cheerio), only a limited subset of blog links is available in the server-rendered HTML.

For Phase 1, the scraper reliably extracts and stores all statically accessible blog articles available at runtime (2 articles at the time of development), which represent the oldest accessible entries.

This approach ensures:

    Deterministic scraping

    Stable backend behavior

    Clear separation of concerns between phases

Phase 2 focuses on content enrichment and automation using Google Search results and LLMs, independent of the initial article count.

🔗 API Endpoints
Method	        Endpoint	            Description
POST	        /api/articles	        Create a new article
GET	            /api/articles	        Fetch all articles
GET	            /api/articles/:id	    Fetch article by ID
PUT	            /api/articles/:id	    Update article
DELETE	        /api/articles/:id	    Delete article

🛠 Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/charankrishnask/beyondchats-blog-automation
cd beyondchats-assignment
2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Run Scraper
node src/scripts/scrapeBlogs.js

5️⃣ Start Server
npm run dev

API will be available at:

https://beyondchats-blog-automation-4.onrender.com/api/articles

✅ Phase 1 Completion Status

✔ Blog scraping implemented

✔ Articles stored in database

✔ CRUD APIs functional

✔ Clean modular architecture

✔ Ready for Phase 2 automation


🚀 Next Phase

Phase 2 will:

Fetch articles via APIs

Search Google for competing articles

Scrape reference content

Use an LLM to enhance article quality

Publish updated articles via existing APIs

## 🔗 Live Links

- Frontend (Vercel): https://beyondchats-blog-automation.vercel.app/
- Backend API (Render): https://beyondchats-blog-automation-4.onrender.com/api/articles

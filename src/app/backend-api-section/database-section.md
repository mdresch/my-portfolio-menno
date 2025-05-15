# Database Section

This section details the persistence layer of your application.

**Suggested Content Structure:**

**Database Purpose and Role**

* Explain the database's function: It serves as the **single source of truth** for your application's data (projects, blog posts, categories, etc.).
* Example Sentence: "The database acts as the persistent storage layer for the application, securely storing all project details, blog content, and related information."

**Technology Choice**

* State the database technology: **Azure SQL Database**.
* **Explain why Azure SQL Database was chosen:**
  * A managed service, reducing administration overhead.
  * Scalability options provided by Azure.
  * Integration capabilities within the Azure ecosystem.
  * Built-in security features.
* Mention the authentication method used (e.g., SQL Authentication as we discussed, or potentially Azure AD authentication if you implemented that).
* Example Sentence: "Azure SQL Database was selected as the relational database due to its reliability as a managed cloud service, scalability options, and seamless integration within the Azure environment. Access is secured using \[mention authentication method, e.g., SQL Authentication via secure connection strings]."

**Object-Relational Mapping (ORM) and Schema Management**

* Explain that you used **Entity Framework Core (EF Core)** as the ORM.
* Mention that EF Core simplifies data access code and maps objects to database tables.
* **Crucially, highlight the use of EF Core Migrations** for managing database schema changes over time.
* **Connect this to the CI/CD section:** Explain that these migrations are applied automatically by your CI/CD pipeline.
* Example Sentence: "Entity Framework Core is used as the ORM to facilitate data access and map C# objects to database tables. Database schema changes are managed using EF Core Migrations, which are applied automatically as part of the CI/CD pipeline to ensure the database is always up-to-date with the application code."

**Schema Overview (Optional but Recommended)**

* Provide a simplified overview of the database schema.
* You could list the main tables (e.g., Projects, BlogPosts, Categories, Technologies).
* Briefly describe the purpose of each table and mention key relationships (e.g., "Projects table is linked to Technologies table").
* A simple diagram here would be very effective if GitBook supports image embedding well.

***

\

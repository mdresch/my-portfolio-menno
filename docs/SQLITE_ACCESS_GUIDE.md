# SQLite Database Access Guide

Your Portfolio application uses SQLite for local development. The database file is located at:
```
api/api.ApiService/PortfolioDb.db
```

## Method 1: PowerShell Helper Script

Run the interactive helper script:
```powershell
./scripts/sqlite-helper.ps1
```

This provides a menu-driven interface to:
- View all tables
- Inspect the FriendContacts table structure
- Query friend contact submissions
- Open SQLite command line

## Method 2: SQLite Command Line (Direct)

If you have sqlite3 installed, you can access the database directly:

```powershell
# Navigate to the API directory
cd api/api.ApiService

# Open the database
sqlite3 PortfolioDb.db

# Common SQLite commands:
.tables                    # List all tables
.schema FriendContacts     # Show table structure
.headers on               # Show column headers
.mode column              # Format output in columns

# Query examples:
SELECT * FROM FriendContacts;
SELECT COUNT(*) FROM FriendContacts;
SELECT Name, Email, CreatedAt FROM FriendContacts ORDER BY CreatedAt DESC LIMIT 5;

# Exit SQLite
.exit
```

## Method 3: VS Code SQLite Extension

1. Install the "SQLite" extension by alexcvzz in VS Code
2. Open Command Palette (Ctrl+Shift+P)
3. Type "SQLite: Open Database"
4. Select the `PortfolioDb.db` file
5. Use the SQLite Explorer panel to browse tables and run queries

## Method 4: DB Browser for SQLite (GUI Tool)

1. Download and install "DB Browser for SQLite" (free)
2. Open the application
3. Click "Open Database" and select `PortfolioDb.db`
4. Use the GUI to browse data, run queries, and manage the database

## Method 5: Using Entity Framework Core Tools

You can also use EF Core commands to interact with the database:

```powershell
# Navigate to the API directory
cd api/api.ApiService

# Generate SQL script for current migrations
dotnet ef migrations script

# Update database (apply pending migrations)
dotnet ef database update

# Get database information
dotnet ef dbcontext info
```

## Common SQL Queries for FriendContacts

```sql
-- View all submissions
SELECT * FROM FriendContacts ORDER BY CreatedAt DESC;

-- Count total submissions
SELECT COUNT(*) as TotalSubmissions FROM FriendContacts;

-- Recent submissions with basic info
SELECT 
    Id,
    Name,
    Email,
    Subject,
    CreatedAt
FROM FriendContacts 
ORDER BY CreatedAt DESC 
LIMIT 10;

-- Search by name or email
SELECT * FROM FriendContacts 
WHERE Name LIKE '%search_term%' 
   OR Email LIKE '%search_term%';

-- Submissions from last 7 days
SELECT * FROM FriendContacts 
WHERE CreatedAt >= datetime('now', '-7 days')
ORDER BY CreatedAt DESC;
```

## Database Schema

The FriendContacts table has the following structure:
- Id (INTEGER, Primary Key, Auto-increment)
- Name (TEXT, Required)
- Email (TEXT, Required)
- Subject (TEXT, Optional)
- Message (TEXT, Required)
- CreatedAt (TEXT, DateTime)

## Backup and Export

To backup your SQLite database:
```powershell
# Create a backup copy
Copy-Item "api/api.ApiService/PortfolioDb.db" "backup/PortfolioDb_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').db"

# Export to SQL script
sqlite3 PortfolioDb.db .dump > portfolio_backup.sql
```

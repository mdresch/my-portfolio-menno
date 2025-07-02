# SQLite Helper Script for Portfolio Database
# This script provides easy access to your SQLite database

$dbPath = "c:\Users\menno\Source\Repos\my-portfolio-menno\api\api.ApiService\PortfolioDb.db"

Write-Host "=== Portfolio SQLite Database Helper ===" -ForegroundColor Green
Write-Host "Database location: $dbPath" -ForegroundColor Yellow
Write-Host ""

# Check if database exists
if (-not (Test-Path $dbPath)) {
    Write-Host "Database file not found! Make sure the .NET API has been run at least once to create the database." -ForegroundColor Red
    exit 1
}

Write-Host "Available commands:" -ForegroundColor Cyan
Write-Host "1. View all tables"
Write-Host "2. View FriendContacts table structure"
Write-Host "3. View all friend contacts"
Write-Host "4. View recent friend contacts (last 10)"
Write-Host "5. Count friend contacts"
Write-Host "6. Open SQLite command line"
Write-Host "7. Exit"
Write-Host ""

do {
    $choice = Read-Host "Enter your choice (1-7)"
    
    switch ($choice) {
        "1" {
            Write-Host "`nTables in database:" -ForegroundColor Yellow
            sqlite3 $dbPath ".tables"
        }
        "2" {
            Write-Host "`nFriendContacts table structure:" -ForegroundColor Yellow
            sqlite3 $dbPath ".schema FriendContacts"
        }
        "3" {
            Write-Host "`nAll friend contacts:" -ForegroundColor Yellow
            sqlite3 $dbPath -header -column "SELECT * FROM FriendContacts ORDER BY CreatedAt DESC;"
        }
        "4" {
            Write-Host "`nRecent friend contacts (last 10):" -ForegroundColor Yellow
            sqlite3 $dbPath -header -column "SELECT Id, Name, Email, Subject, CreatedAt FROM FriendContacts ORDER BY CreatedAt DESC LIMIT 10;"
        }
        "5" {
            Write-Host "`nTotal friend contacts:" -ForegroundColor Yellow
            sqlite3 $dbPath "SELECT COUNT(*) as 'Total Contacts' FROM FriendContacts;"
        }
        "6" {
            Write-Host "`nOpening SQLite command line. Type '.exit' to return to this menu." -ForegroundColor Yellow
            Write-Host "Database: $dbPath" -ForegroundColor Gray
            sqlite3 $dbPath
        }
        "7" {
            Write-Host "Goodbye!" -ForegroundColor Green
            break
        }
        default {
            Write-Host "Invalid choice. Please enter 1-7." -ForegroundColor Red
        }
    }
    
    if ($choice -ne "7" -and $choice -ne "6") {
        Write-Host ""
        Read-Host "Press Enter to continue"
        Write-Host ""
    }
} while ($choice -ne "7")

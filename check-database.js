const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to your SQLite database
const dbPath = path.join(__dirname, 'api', 'api.ApiService', 'PortfolioDb.db');

console.log('🔍 Checking Portfolio Database...');
console.log('Database path:', dbPath);
console.log('');

// Open database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err.message);
        return;
    }
    console.log('✅ Connected to SQLite database');
});

// Check if FriendContacts table exists and get its structure
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='FriendContacts'", (err, row) => {
    if (err) {
        console.error('❌ Error checking table:', err.message);
        return;
    }
    
    if (!row) {
        console.log('⚠️  FriendContacts table does not exist');
        db.close();
        return;
    }
    
    console.log('✅ FriendContacts table exists');
    
    // Get table structure
    db.all("PRAGMA table_info(FriendContacts)", (err, columns) => {
        if (err) {
            console.error('❌ Error getting table info:', err.message);
            return;
        }
        
        console.log('\n📋 Table Structure:');
        columns.forEach(col => {
            console.log(`  ${col.name} (${col.type}) ${col.pk ? '- PRIMARY KEY' : ''} ${col.notnull ? '- NOT NULL' : ''}`);
        });
        
        // Count total records
        db.get("SELECT COUNT(*) as count FROM FriendContacts", (err, result) => {
            if (err) {
                console.error('❌ Error counting records:', err.message);
                return;
            }
            
            console.log(`\n📊 Total friend contact submissions: ${result.count}`);
            
            if (result.count > 0) {
                // Show recent submissions
                db.all(`
                    SELECT Id, Name, Email, Subject, CreatedAt 
                    FROM FriendContacts 
                    ORDER BY CreatedAt DESC 
                    LIMIT 5
                `, (err, rows) => {
                    if (err) {
                        console.error('❌ Error fetching recent records:', err.message);
                        return;
                    }
                    
                    console.log('\n📝 Recent Submissions (last 5):');
                    rows.forEach((row, index) => {
                        console.log(`  ${index + 1}. ${row.Name} (${row.Email})`);
                        console.log(`     Subject: ${row.Subject || 'No subject'}`);
                        console.log(`     Date: ${row.CreatedAt}`);
                        console.log('');
                    });
                    
                    db.close((err) => {
                        if (err) {
                            console.error('❌ Error closing database:', err.message);
                        } else {
                            console.log('🔒 Database connection closed');
                        }
                    });
                });
            } else {
                console.log('📭 No submissions found');
                db.close((err) => {
                    if (err) {
                        console.error('❌ Error closing database:', err.message);
                    } else {
                        console.log('🔒 Database connection closed');
                    }
                });
            }
        });
    });
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n🛑 Closing database connection...');
    db.close((err) => {
        if (err) {
            console.error('❌ Error closing database:', err.message);
        } else {
            console.log('✅ Database connection closed cleanly');
        }
        process.exit(0);
    });
});

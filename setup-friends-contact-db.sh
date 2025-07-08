#!/bin/bash
# setup-friends-contact-db.sh
# Script to set up the FriendContact database table

echo "🚀 Setting up Friends Contact database integration..."

# Navigate to API project
cd api/api.ApiService

echo "📦 Building the project..."
dotnet build

echo "🗃️ Creating database migration for FriendContact table..."
dotnet ef migrations add AddFriendContactTable --verbose

echo "📊 Applying migration to database..."
dotnet ef database update --verbose

echo "✅ Database setup complete!"
echo ""
echo "🌟 Next steps:"
echo "1. Update your .env.local file with the correct API URL"
echo "2. Start your .NET API: dotnet run (from api/api.ApiService)"
echo "3. Test the friends contact form on your Next.js app"
echo ""
echo "🔍 API Endpoints available:"
echo "  POST /api/friendscontact - Create new friend contact"
echo "  GET  /api/friendscontact - List all friend contacts"
echo "  GET  /api/friendscontact/{id} - Get specific friend contact"

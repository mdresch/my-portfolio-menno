# Commands to Start the Integrated Portfolio Application

## Starting the API

```powershell
# Navigate to the API directory
cd c:\Users\menno\Source\Repos\my-portfolio-menno\api

# Run the API
dotnet run
```

The API will start on http://localhost:5154/api

## Starting the Frontend

```powershell
# Navigate to the root directory
cd c:\Users\menno\Source\Repos\my-portfolio-menno

# Run the Next.js development server
npm run dev
```

The frontend will start on http://localhost:3000

## Available Features

- View projects from the database
- Browse blog posts
- Explore skills by category
- Submit contact messages
- Admin login (username: admin, password: Portfolio@2025)

## Testing the API

You can use the Swagger UI at http://localhost:5154/swagger to test the API endpoints.

## Notes

- The API and frontend must both be running for the application to work properly.
- The database is using LocalDB, make sure SQL Server LocalDB is installed and running.
- JWT authentication is implemented for admin features.

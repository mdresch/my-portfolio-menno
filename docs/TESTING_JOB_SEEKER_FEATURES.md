# Testing Job Seeker Features

## Quick Start

The development server is running at: **http://localhost:3001**

## Available Routes

### 1. Main Job Seeker Dashboard
**URL:** http://localhost:3001/job-seeker

**Features:**
- Profile Builder tab
- Networking Hub tab
- Industry Trends tab
- Profile Completion Guide tab

**Note:** Requires authentication. You'll see a sign-in prompt if not logged in.

### 2. Features Showcase Page
**URL:** http://localhost:3001/job-seeker/features

**Features:**
- Overview of all job seeker tools
- Feature descriptions and benefits
- Links to specific features

**Note:** This page does NOT require authentication - good for testing the UI.

## Testing Checklist

### ✅ Without Authentication
1. **Features Page** - Visit `/job-seeker/features` to see the showcase
2. **UI Components** - Check responsive design and dark mode

### ✅ With Authentication
1. **Sign In** - Go to `/login` or `/signup` to create an account
2. **Profile Builder** - `/job-seeker?tab=profile`
   - Test form inputs
   - Save profile data
   - Export functionality
3. **Networking Hub** - `/job-seeker?tab=networking`
   - Add contacts
   - View networking events
   - Test connection tracking
4. **Industry Trends** - `/job-seeker?tab=trends`
   - View industry news
   - Check skill trends
   - Review market insights
5. **Completion Guide** - `/job-seeker?tab=guide`
   - View profile completion score
   - Check recommendations

## API Endpoints to Test

### Profile Management
- `GET /api/job-seeker/profile` - Get user profile
- `POST /api/job-seeker/profile` - Save profile
- `PUT /api/job-seeker/profile` - Update profile

### Networking
- `GET /api/job-seeker/networking` - Get contacts and events
- `POST /api/job-seeker/networking` - Add contact

### Industry Trends
- `GET /api/job-seeker/industry-trends` - Get trends data

### Recommendations
- `GET /api/job-seeker/recommendations` - Get personalized recommendations

## Common Issues

### Authentication Required
If you see "Sign In Required":
- Go to `/login` or `/signup`
- Create a test account
- Return to `/job-seeker`

### Data Persistence
- Profile data is stored in `localStorage` (client-side)
- In production, this would be stored in a database
- Clear browser storage to reset test data

## Browser Console

Check the browser console (F12) for:
- API call errors
- Component rendering issues
- Missing dependencies

## Next Steps

1. Test the features page first (no auth needed)
2. Create a test account
3. Test each tab in the dashboard
4. Check API endpoints in Network tab
5. Test responsive design on mobile viewport


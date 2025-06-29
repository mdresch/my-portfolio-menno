# Friends Contact Form - Elio Inspired

This is a fun, space-themed contact form inspired by the movie "Elio" for friends to share their cosmic details with Menno.

## Features

- **Age Verification**: Ensures only users 18+ can submit the form
- **Required Consent**: Users must explicitly consent to share their information
- **Cosmic Theme**: Space and alien-themed questions inspired by the movie Elio
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Client-side and server-side validation
- **API Integration**: Secure form submission via Next.js API routes

## Form Fields

### Required Fields
- Name (real name)
- Alien Name (cosmic alter ego)
- Age (must be 18+)
- Birthday
- Current residence
- Place of birth on Earth
- Favorite color

### Optional Fun Fields
- Space food essentials
- Essential space gear
- Hero qualities
- Alien hobbies
- Dance battle song
- Favorite Disney film
- Space journey message to Menno

## Technical Implementation

### Frontend (`/src/app/friends-contact/page.tsx`)
- React functional component with TypeScript
- Form state management with useState
- Client-side validation
- Responsive UI with Tailwind CSS
- Framer Motion animations
- Age verification and consent checkboxes

### Backend API (`/src/app/api/friends-contact/route.ts`)
- Next.js API route handler
- Server-side validation
- JSON response format
- Error handling
- CORS support

### Navigation
- Added to the main navigation menu under "About"
- Accessible at `/friends-contact`

## Security Features

1. **Age Verification**: Double-check that users are 18+
2. **Consent Required**: Explicit consent checkbox
3. **Input Validation**: Both client and server-side validation
4. **Secure Submission**: Data sent via HTTPS POST request
5. **Error Handling**: Graceful error messages

## Usage

1. Navigate to `/friends-contact` on the website
2. Fill out the required fields
3. Complete age verification and consent
4. Submit the form
5. Receive confirmation message

## Future Enhancements

- Database integration for storing submissions
- Email notifications to Menno
- Confirmation emails to submitters
- Admin dashboard for viewing submissions
- Rate limiting and spam protection

---

*This feature is part of Portfolio Menno and adds a fun, interactive way for friends to connect and share their cosmic personalities!* 🚀✨

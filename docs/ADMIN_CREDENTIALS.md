# Admin Login Credentials

This document lists all admin credentials used in the portfolio application.

## 🔐 Admin Credentials Summary

### 1. Firebase Authentication (Primary - Next.js Frontend)

**Used for:** Admin login on the Next.js frontend (`/admin/login`)

**Credentials:**
- **Email:** `admin@menno.dev`
- **Password:** `AdminPassword123!`

**Where it's used:**
- `src/components/LoginForm.tsx` - Main login form
- `src/lib/auth.tsx` - Firebase authentication
- Admin dashboard and blog management features

**How to use:**
1. Navigate to `/admin/login` or use the login form
2. Enter email: `admin@menno.dev`
3. Enter password: `AdminPassword123!`

**To create/reset this user:**
```bash
# For Firebase Emulator (local development)
node scripts/create-admin-user.js

# For production Firebase
# Use Firebase Console to create/reset the user
```

---

### 2. .NET API JWT Authentication (Backend API)

**Used for:** Admin access to the .NET Core API backend

**Credentials:**
- **Username:** `admin`
- **Password:** `Portfolio@2025`

**Where it's used:**
- `.NET API` backend (if running separately)
- JWT token generation for API access
- Swagger UI authentication at `http://localhost:5154/swagger`

**Note:** The API directory is not currently in the repository. This credential is documented in `Startup.md` but may not be active.

---

### 3. AdminTools Component Password (Simple Client-Side)

**Used for:** Quick admin access to blog post tools (cross-posting, etc.)

**Configuration:**
- Uses environment variable: `NEXT_PUBLIC_ADMIN_PASSWORD`
- Set in `.env.local` or `.env` file

**Where it's used:**
- `src/components/AdminTools.tsx` - Blog post admin tools
- Hashnode/Medium cross-posting features

**⚠️ Security Note:** This is a simple client-side password check and is not secure for production use. Consider migrating to Firebase Auth.

---

## 📝 Quick Reference

### For Next.js Admin Dashboard:
```
Email: admin@menno.dev
Password: AdminPassword123!
```

### For .NET API (if available):
```
Username: admin
Password: Portfolio@2025
```

### For AdminTools Component:
```
Set NEXT_PUBLIC_ADMIN_PASSWORD in .env.local
```

---

## 🔧 Setting Up Admin Access

### Option 1: Firebase Authentication (Recommended)

1. **For Local Development (Emulator):**
   ```bash
   # Start Firebase emulators
   firebase emulators:start
   
   # In another terminal, create admin user
   node scripts/create-admin-user.js
   ```

2. **For Production:**
   - Go to Firebase Console
   - Navigate to Authentication > Users
   - Add user with email: `admin@menno.dev`
   - Set password: `AdminPassword123!`

### Option 2: Environment Variable (AdminTools)

Add to `.env.local`:
```env
NEXT_PUBLIC_ADMIN_PASSWORD="your-admin-password-here"
```

---

## 🧪 Testing Admin Login

### Test Firebase Auth:
```bash
# Test Firebase authentication
node scripts/test-firebase-auth.ts
```

### Test Login Form:
1. Start dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Use credentials: `admin@menno.dev` / `AdminPassword123!`

---

## 🔒 Security Recommendations

1. **Change Default Passwords:**
   - Update Firebase admin password in production
   - Use strong, unique passwords
   - Enable 2FA if available

2. **Environment Variables:**
   - Never commit `.env.local` to git
   - Use different passwords for dev/staging/prod
   - Rotate passwords regularly

3. **Firebase Security Rules:**
   - Configure proper Firebase Security Rules
   - Restrict admin access to authorized users only
   - Use Firebase Admin SDK for server-side operations

4. **Remove Simple Password Checks:**
   - Migrate `AdminTools` component to use Firebase Auth
   - Remove `NEXT_PUBLIC_ADMIN_PASSWORD` if not needed

---

## 🐛 Troubleshooting

### Can't Login with Firebase Auth

**Error: "User not found"**
- Run `node scripts/create-admin-user.js` to create the user
- Check if Firebase emulator is running (for local dev)
- Verify Firebase project configuration

**Error: "Wrong password"**
- Verify password: `AdminPassword123!`
- Check if user exists in Firebase Console
- Try resetting password in Firebase Console

### Can't Access Admin Dashboard

**Check:**
1. Are you logged in? Check `src/lib/auth.tsx` authentication state
2. Is Firebase configured? Check `src/lib/firebase.ts`
3. Are environment variables set? Check `.env.local`

---

## 📚 Related Files

- `src/components/LoginForm.tsx` - Login form component
- `src/lib/auth.tsx` - Authentication context and logic
- `src/lib/firebase.ts` - Firebase configuration
- `scripts/create-admin-user.js` - Script to create admin user
- `scripts/test-firebase-auth.ts` - Test authentication
- `Startup.md` - General startup instructions

---

**Last Updated:** January 2025


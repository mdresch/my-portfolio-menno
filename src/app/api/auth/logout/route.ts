import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await signOut(auth);
    return NextResponse.json({ message: 'User signed out successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error during sign out:', error);
    return NextResponse.json({ message: 'Error signing out' }, { status: 500 });
  }
}
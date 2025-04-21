import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error: any) {
    console.error('Error during sign up:', error);
    if (error.code === 'auth/email-already-in-use') {
      return NextResponse.json({ message: 'Email already in use' }, { status: 409 });
    } else {
      return NextResponse.json({ message: 'Sign up failed' }, { status: 500 });
    }
  }
}
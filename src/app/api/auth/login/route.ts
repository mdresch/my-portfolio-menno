import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    await signInWithEmailAndPassword(auth, email, password);

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    } else if (error.code === 'auth/wrong-password') {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    } else if (error.code === 'auth/invalid-credential'){
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    else{
      console.error('Login error:', error);
      return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
  }
}
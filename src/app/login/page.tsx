import React from 'react';
import LoginForm from '../../components/LoginForm';

export const metadata = {
  title: 'Admin Login | Menno Drescher Portfolio',
  description: 'Login to access admin features for Menno Drescher’s portfolio site.',
};

export default function LoginPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}
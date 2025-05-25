import LoginForm from '../../../components/LoginForm';

export const metadata = {
  title: 'Admin Login | Portfolio',
  description: 'Login to the admin dashboard to manage portfolio content',
};

export default function AdminLogin() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
      <LoginForm />
    </div>
  );
}

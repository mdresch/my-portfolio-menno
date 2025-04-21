import LoginForm from '@/components/admin/LoginForm';

const AdminLoginPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <LoginForm />
    </div>
  );
};

export default AdminLoginPage;

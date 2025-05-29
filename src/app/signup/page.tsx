import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join Our Platform
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create your account to get started
        </p>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
}
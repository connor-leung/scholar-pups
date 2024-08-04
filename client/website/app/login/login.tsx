import React from 'react';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Login Page</h1>
          <a href="/api/auth/login" className="text-blue-500 underline">
            Login
          </a>
        </div>
      </main>
    </>
  );
}


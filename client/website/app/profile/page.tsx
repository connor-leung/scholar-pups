import Image from "next/image";
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Navbar from "../components/Navbar";

export default function Login() {
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

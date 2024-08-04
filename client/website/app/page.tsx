import Image from "next/image";
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../app/components/Navbar';
import Link from 'next/link';
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

    </main>
    </>
  );
}





import Image from "next/image";
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard page</h1>
    </main>
  );
}




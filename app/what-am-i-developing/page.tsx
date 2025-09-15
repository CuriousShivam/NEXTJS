export const dynamic = 'force-static';

export default function WhatAmIDevelopingPage() {
  const timestamp = new Date().toISOString();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">What are you developing?</h1>
      <p className="mt-4 text-gray-700">
        You are developing a Next.js Dashboard application using the App Router, Tailwind CSS, and TypeScript.
      </p>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        <li>Framework: Next.js (App Router)</li>
        <li>Language: TypeScript</li>
        <li>Styling: Tailwind CSS</li>
      </ul>
      <p className="mt-6 text-sm text-gray-500">Generated: {timestamp}</p>
    </main>
  );
}

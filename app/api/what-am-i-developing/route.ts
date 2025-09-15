export async function GET() {
  const body = {
    projectName: 'nextjs-dashboard',
    description:
      'You are developing a Next.js Dashboard application that showcases data (revenue, invoices, customers) using the App Router, TypeScript, Tailwind CSS, and route handlers.',
    docs: {
      next: 'https://nextjs.org/docs/app',
      tailwind: 'https://tailwindcss.com/docs',
    },
    timestamp: new Date().toISOString(),
  };

  return Response.json(body, { status: 200 });
}

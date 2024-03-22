import { auth } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) return redirect('/');

  return <Suspense>{children}</Suspense>;
}

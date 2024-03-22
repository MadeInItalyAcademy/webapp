import { redirect } from 'next/navigation';
import { auth } from '../auth';
import { Suspense } from 'react';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return <Suspense>{children}</Suspense>;
}

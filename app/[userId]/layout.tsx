import { auth } from '@/libs/auth';
import prisma from '@/libs/prisma';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // await prisma.user.deleteMany({});

  const session = await auth();
  if (!session?.user) return redirect('/');

  if (session.user.email) {
    const userExist = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!userExist && session.user?.name) {
      await prisma.user.create({
        data: {
          name: session.user.name || '',
          email: session.user.email,
          image: session.user.image || ''
        }
      });
    }
  }


  return <Suspense>{children}</Suspense>;
}

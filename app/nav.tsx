import Navbar from './navbar';
import prisma from '@/libs/prisma';
import { auth } from '@/libs/auth';

export default async function Nav() {
  const session = await auth();

  let userId;

  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email }
    });
    userId = user?.id;
  }

  return <Navbar user={session?.user} userId={userId} />;
}

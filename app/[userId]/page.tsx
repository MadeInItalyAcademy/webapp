import prisma from '@/libs/prisma';
import { User } from '@/types/data';

export default async function UserPage({
  params
}: {
  params: { userId: string };
}) {
  const user = await prisma.user.findUnique({
    where: { id: params.userId }
  });

  return (
    <main>
      <h1>{user?.name}</h1>
    </main>
  );
}

export async function generateStaticParams() {
  const users: User[] = await prisma.user.findMany();

  return users.map(({ id }) => ({
    userId: id
  }));
}

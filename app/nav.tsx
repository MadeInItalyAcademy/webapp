import Navbar from './navbar';
import prisma from './lib/prisma';
import { auth } from './auth';

export default async function Nav() {
  const session = await auth();
  if (session?.user) {
    const { name, email } = session.user;
    try {
      if (email && name) {
        const userExist = await prisma.user.findUnique({
          where: { email: email || undefined }
        });
        if (!userExist) {
          const split = name.split(' ');
          const firstName = split[0];
          split.shift();

          const data = {
            name: firstName,
            surname: split.join(' '),
            email: email
          };
          await prisma.user.create({ data: data });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <Navbar user={session?.user} />;
}

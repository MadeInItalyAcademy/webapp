import Image from 'next/image';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

import { User } from '@/types/data';
import avatar from '@/public/avatar.png';

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Image</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i}>
            <TableCell>
              <Image
                className='rounded-full'
                src={user?.image || avatar}
                alt={user.name}
                width={48}
                height={48}
              />
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

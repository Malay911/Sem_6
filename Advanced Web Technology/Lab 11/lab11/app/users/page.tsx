import { db2 } from "@/lib/db";
import Link from "next/link";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  UserID: number;
  UserName: string;
}

export default async function UsersPage() {
  const [users] = await db2.query<User[]>("SELECT * FROM User");

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.UserID}>
            <Link href={`/users/${user.UserID}`}>
              {user.UserName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

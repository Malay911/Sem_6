import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store"
    });
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await prisma.user.findMany();
  
    return (
      <div style={{ padding: 20 }}>
        <h1>Users</h1>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any) => (
              <tr key={u.UserID}>
                <td>{u.UserID}</td>
                <td>{u.UserName}</td>
                <td><Link href={`/users/${u.UserID}`}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
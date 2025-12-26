import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const userId = Number(id);

  if (isNaN(userId)) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Invalid User ID</h2>
        <Link href="/users">Back</Link>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      UserID: userId,
    },
  });

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>User not found</h2>
        <Link href="/users">Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>User Details</h1>
      <p><b>ID:</b> {user.UserID}</p>
      <p><b>Name:</b> {user.UserName}</p>
      <p><b>Password:</b> {user.Password}</p>

      <Link href="/users">⬅ Back</Link>
    </div>
  );
}

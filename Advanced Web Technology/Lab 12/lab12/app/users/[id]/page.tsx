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
      <div className="p-6">
        <h2 className="text-xl font-semibold">Invalid User ID</h2>
        <Link href="/users" className="text-blue-600 hover:underline">
          Back
        </Link>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { UserID: userId },
    include: {
      task: true,
    },
  });

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">User not found</h2>
        <Link href="/users" className="text-blue-600 hover:underline">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Tasks</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-900">
              <td className="px-4 py-2 border">{user.UserID}</td>
              <td className="px-4 py-2 border">{user.UserName}</td>

              <td className="px-4 py-2 border align-top">
                {user.task.length === 0 ? (
                  <span className="text-gray-500">No tasks</span>
                ) : (
                  <table className="w-full border border-gray-300 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="px-2 py-1 border text-sm">Title</th>
                        <th className="px-2 py-1 border text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.task.map((t) => (
                        <tr key={t.TaskID}>
                          <td className="px-2 py-1 border text-sm">
                            {t.TaskTitle}
                          </td>
                          <td className="px-2 py-1 border text-sm">
                            {t.IsCompleted ? (
                              <span className="text-green-600 font-medium">
                                Done
                              </span>
                            ) : (
                              <span className="text-yellow-600 font-medium">
                                Pending
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </td>

              <td className="px-4 py-2 border">
                <Link
                  href="/users"
                  className="text-blue-600 hover:underline"
                >
                  Back
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

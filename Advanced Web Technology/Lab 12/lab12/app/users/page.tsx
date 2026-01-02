import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    include: {
      task: true,
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

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
            {users.map((u) => (
              <tr
                key={u.UserID}
                className="hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-2 border">{u.UserID}</td>
                <td className="px-4 py-2 border">{u.UserName}</td>

                <td className="px-4 py-2 border align-top">
                  {u.task.length === 0 ? (
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
                        {u.task.map((t) => (
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
                    href={`/users/${u.UserID}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

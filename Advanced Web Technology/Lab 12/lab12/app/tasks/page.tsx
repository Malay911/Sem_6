import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function TasksPage() {
  const tasks = await prisma.task.findMany({
    include: {
      user: true,
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border">Task ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Completed</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t) => (
              <tr
                key={t.TaskID}
                className="hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-2 border">{t.TaskID}</td>
                <td className="px-4 py-2 border">{t.TaskTitle}</td>

                <td className="px-4 py-2 border">
                  {t.IsCompleted ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-yellow-600 font-medium">No</span>
                  )}
                </td>

                <td className="px-4 py-2 border">
                  {t.user ? t.user.UserName : "—"}
                </td>

                <td className="px-4 py-2 border">
                  <Link
                    href={`/tasks/${t.TaskID}`}
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

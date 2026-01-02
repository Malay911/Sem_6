import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const taskId = Number(id);

  if (isNaN(taskId)) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Invalid Task ID</h2>
        <Link href="/tasks" className="text-blue-600 hover:underline">
          ⬅ Back
        </Link>
      </div>
    );
  }

  const task = await prisma.task.findUnique({
    where: { TaskID: taskId },
    include: {
      user: true,
    },
  });

  if (!task) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Task not found</h2>
        <Link href="/tasks" className="text-blue-600 hover:underline">
          ⬅ Back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Task Details</h1>

      <table className="min-w-full border border-gray-300 dark:border-gray-700">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Task ID</td>
            <td className="border px-4 py-2">{task.TaskID}</td>
          </tr>

          <tr>
            <td className="border px-4 py-2 font-semibold">Title</td>
            <td className="border px-4 py-2">{task.TaskTitle}</td>
          </tr>

          <tr>
            <td className="border px-4 py-2 font-semibold">Description</td>
            <td className="border px-4 py-2">{task.TaskDescription}</td>
          </tr>

          <tr>
            <td className="border px-4 py-2 font-semibold">Completed</td>
            <td className="border px-4 py-2">
              {task.IsCompleted ? "Yes" : "No"}
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2 font-semibold">User</td>
            <td className="border px-4 py-2">
              {task.user ? (
                <Link
                  href={`/users/${task.user.UserID}`}
                  className="text-blue-600 hover:underline"
                >
                  {task.user.UserName}
                </Link>
              ) : (
                "—"
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <Link href="/tasks" className="text-blue-600 hover:underline">
          ⬅ Back to Tasks
        </Link>
      </div>
    </div>
  );
}

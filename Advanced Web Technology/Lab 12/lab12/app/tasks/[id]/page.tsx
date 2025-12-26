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
      <div style={{ padding: 20 }}>
        <h2>Invalid Task ID</h2>
        <Link href="/tasks">Back</Link>
      </div>
    );
  }

  const task = await prisma.task.findUnique({
    where: {
      TaskID: taskId,
    },
  });

  if (!task) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Task not found</h2>
        <Link href="/tasks">Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Details</h1>

      <p><b>Task ID:</b> {task.TaskID}</p>
      <p><b>Title:</b> {task.TaskTitle}</p>
      <p><b>Description:</b> {task.TaskDescription}</p>
      <p><b>Completed:</b> {task.IsCompleted ? "Yes" : "No"}</p>
      <p><b>User ID:</b> {task.UserID}</p>

      <Link href="/tasks">⬅ Back to Tasks</Link>
    </div>
  );
}

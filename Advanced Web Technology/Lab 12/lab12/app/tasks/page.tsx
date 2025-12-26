import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function getTasks() {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store"
    });
    return res.json();
  }
  
  export default async function TasksPage() {
    const tasks = await prisma.task.findMany();
  
    return (
      <div style={{ padding: 20 }}>
        <h1>Tasks</h1>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t: any) => (
              <tr key={t.TaskID}>
                <td>{t.TaskID}</td>
                <td>{t.TaskTitle}</td>
                <td>{t.IsCompleted ? "Yes" : "No"}</td>
                <td>{t.UserID}</td>
                <td><Link href={`/tasks/${t.TaskID}`}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
import { db2 } from "@/lib/db";
import { RowDataPacket } from "mysql2";

interface Task extends RowDataPacket {
  TaskID: number;
  TaskTitle: string;
  TaskDescription: string;
}

export default async function TasksPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
    const { q } = await searchParams;
    const keyword = q || "";

  const [tasks] = await db2.query<Task[]>(
    `SELECT * FROM Task 
     WHERE TaskTitle LIKE ? OR TaskDescription LIKE ?`,
    [`%${keyword}%`, `%${keyword}%`]
  );

  return (
    <div>
      <h2>Tasks</h2>

      <form>
        <input name="q" placeholder="Search task..." />
        <button>Search</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.TaskID}>
            {task.TaskTitle} - {task.TaskDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { db2 } from "@/lib/db";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  UserID: number;
  UserName: string;
}

interface Task extends RowDataPacket {
  TaskID: number;
  TaskTitle: string;
  IsCompleted: boolean;
}

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [users] = await db2.query<User[]>(
    "SELECT * FROM User WHERE UserID = ?",
    [id]
  );

  const [tasks] = await db2.query<Task[]>(
    "SELECT * FROM Task WHERE UserID = ?",
    [id]
  );

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {users[0]?.UserName}</p>

      <h3>User Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.TaskID}>
            {task.TaskTitle} - {task.IsCompleted ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

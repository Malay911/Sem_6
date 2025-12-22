import pool from "@/lib/db";
import Link from "next/link";

interface Faculty {
  id: number;
  name: string;
  age: number;
  experience: number;
}

export default async function FacultyPage() {
  const result = await pool.query("SELECT * FROM faculty ORDER BY id");

  const faculties: Faculty[] = result.rows;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Faculty List</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.age}</td>
              <td>{f.experience}</td>
                <td>
                <Link href={`/faculty/${f.id}`}>View</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import pool from "@/lib/db";

export default async function FacultyById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const facultyId = Number(id);

  const result = await pool.query(
    "SELECT * FROM faculty WHERE id = $1",
    [facultyId]
  );

  const faculty = result.rows[0];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{faculty.name}</h2>
      <p>Age: {faculty.age}</p>
      <p>Experience: {faculty.experience}</p>
    </div>
  );
}

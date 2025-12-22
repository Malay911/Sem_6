import connectMongo from "@/lib/mongodb";
import Course from "@/models/Course";
import Link from "next/link";

export default async function CoursesPage() {
  await connectMongo();

  const courses = await Course.find().lean();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Courses List</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course: any) => (
            <tr key={course._id}>
              <td className="px-4">{course.title}</td>
              <td className="px-4">{course.duration}</td>
              <td className="px-4">{course.fees}</td>
              <td>
                <Link href={`/courses/${course._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

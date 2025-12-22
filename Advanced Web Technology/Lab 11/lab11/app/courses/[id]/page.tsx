import connectMongo from "@/lib/mongodb";
import Course from "@/models/Course";
import { Types } from "mongoose";

export default async function CourseById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!Types.ObjectId.isValid(id)) {
    return <h1>Invalid Course ID</h1>;
  }

  await connectMongo();

  const course = await Course.findById(id).lean();

  if (!course) return <h1>Course not found</h1>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p>Duration: {course.duration}</p>
      <p>Fees: ₹{course.fees}</p>
    </div>
  );
}

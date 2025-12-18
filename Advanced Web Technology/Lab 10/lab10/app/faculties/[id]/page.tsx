import Faculty from "@/types/Faculty";
import callApi from "@/utils/callApi";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function FacultyById({ params }: Props) {
  const { id } = await params;

  const faculty = (await callApi(`API_CRUD/${id}`, "GET")) as Faculty;

  if (!faculty?.id) {
    return <h1 className="p-4">Faculty not found</h1>;
  }

  return (
    <div className="p-4">
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">{faculty.Name}</td>
            <td className="p-4">{faculty.Age}</td>
            <td>{faculty.Experience}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

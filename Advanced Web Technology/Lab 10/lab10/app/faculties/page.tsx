import Faculty from "@/types/Faculty";
import callApi from "@/utils/callApi";
import Link from "next/link";

async function Faculties() {
  const res = await callApi("API_CRUD", "GET", 10);
  const faculties: Faculty[] = Array.isArray(res) ? res : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Faculty List</h2>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Faculty</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {faculties.map((fac) => (
            <tr key={fac.id}>
              <td className="p-4">{fac.Name}</td>
              <td className="p-4">{fac.Age}</td>
              <td>{fac.Experience}</td>
              <td>
                <Link
                  href={`/faculties/${fac.id}`}
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faculties;

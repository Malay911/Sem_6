import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Faculty Management System</h1>

      <Link href="/faculties">
        View All Faculties
      </Link>
    </div>
  );
}

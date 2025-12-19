import { db } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import Link from "next/link";

interface BankRow extends RowDataPacket {
  Bank_id: number;
  Cust_name: string;
  Bank_name: string;
  Amount: number;
  transaction: number;
}

export default async function BankByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const bankId = Number(id);

  if (Number.isNaN(bankId)) {
    return <h2 className="p-4 text-red-600">Invalid Bank ID</h2>;
  }

  const [rows] = await db.query<BankRow[]>(
    "SELECT * FROM bank WHERE Bank_id = ?",
    [bankId]
  );

  if (rows.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-red-600 text-xl">Record not found</h2>
        <Link href="/bank" className="text-blue-600 underline">
          Back
        </Link>
      </div>
    );
  }

  const bank = rows[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bank Details</h2>

      <p><b>ID:</b> {bank.Bank_id}</p>
      <p><b>Name:</b> {bank.Cust_name}</p>
      <p><b>Bank:</b> {bank.Bank_name}</p>
      <p><b>Amount:</b> {bank.Amount}</p>
      <p><b>Transactions:</b> {bank.transaction}</p>

      <Link href="/bank" className="text-blue-600 underline mt-4 block">
        ← Back to list
      </Link>
    </div>
  );
}

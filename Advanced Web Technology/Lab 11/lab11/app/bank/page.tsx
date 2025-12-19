import {db} from "@/lib/db";
import Link from "next/link";
import { RowDataPacket } from "mysql2";

interface BankRow extends RowDataPacket {
  Bank_id: number;
  Cust_name: string;
  Bank_name: string;
  Amount: number;
  transaction: number;
}

export default async function BankPage() {
  const [rows] = await db.query<BankRow[]>(
    "SELECT * FROM bank"
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bank List</h2>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Bank ID</th>
            <th>Customer Name</th>
            <th>Bank Name</th>
            <th>Amount</th>
            <th>Transaction</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.Bank_id}>
              <td className="p-4">{row.Bank_id}</td>
              <td className="p-4">{row.Cust_name}</td>
              <td className="p-4">{row.Bank_name}</td>
              <td className="p-4">{row.Amount}</td>
              <td className="p-4">{row.transaction}</td>
              <td>
                <Link
                  href={`/bank/${row.Bank_id}`}
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

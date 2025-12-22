import mysql from "mysql2/promise";
import { Pool } from "pg";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bank",
});


export const db2 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nextdemo",
});

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "M@lay2005",
  database: "nextjs_demo_crud",
});

export default pool;

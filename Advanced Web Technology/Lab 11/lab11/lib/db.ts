import mysql from "mysql2/promise";

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

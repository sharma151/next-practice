import mysql from "mysql2/promise";
//need to configure the database connection from root sql workbench in desktop
export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Querty@123",
});

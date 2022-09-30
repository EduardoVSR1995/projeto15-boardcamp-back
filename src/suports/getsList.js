import connection from "../database/postgres.js";

export default async function(table){
  try {

    const promis = await connection.query(`SELECT * FROM ${table}`)

    return promis.rows;
    
  } catch (error) {
    return error;    
  }
}
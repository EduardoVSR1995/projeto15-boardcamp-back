import connection from "../database/postgres.js";
import querys from "./querys.js";

export default async function(table, offset,limit,order){

  try {
    
    const value = querys(offset,limit,order);

    console.log(value)

    const promis = await connection.query(`SELECT * FROM ${table} ${value};`)

    return promis.rows;
    
  } catch (error) {
    return error;    
  }
}
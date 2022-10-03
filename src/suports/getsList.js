import connection from "../database/postgres.js";

export default async function(table, offset,limit){
  let value='';
  try {
    if(limit)value+= `LIMIT ${limit}`
    if(offset)value+= `OFFSET ${offset} ROWS`
    
    const promis = await connection.query(`SELECT * FROM ${table} ${value};`)

    return promis.rows;
    
  } catch (error) {
    return error;    
  }
}
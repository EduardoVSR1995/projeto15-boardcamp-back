import connection from "../database/postgres.js";

export default async function(localItens , categori, iten,select){
    try {

        if(select){

            const {rows} = await connection.query(`SELECT * FROM ${localItens} WHERE ${categori} = $1`,[iten])
            
            return rows;
        }
        const promis = await connection.query(`SELECT * FROM ${localItens} WHERE ${categori} LIKE $1 ;`, [ `${iten}%` ] )
        
        return promis;
        
    } catch (error) {

        return error;
    }
}
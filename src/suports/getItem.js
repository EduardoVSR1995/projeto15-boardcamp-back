import connection from "../database/postgres.js";

export default async function(localItens , categori, iten){
    try {

        const promis = await connection.query(`SELECT * FROM ${localItens} WHERE ${categori} LIKE $1 ;`, [ `${iten}%` ] )
        
        console.log(promis)

        return promis;
        
    } catch (error) {
        console.log(error)

        return error;
    }
}
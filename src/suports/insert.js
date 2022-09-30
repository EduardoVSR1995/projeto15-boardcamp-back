import connection from "../database/postgres.js";

export default async function(localItens , iten){
    try {
        const promis = await connection.query(`INSERT INTO ${localItens} VALUES ($1) ;`, [iten] )
        
        return promis;
        
    } catch (error) {
        console.log(error,'errou')
        return error;
    }
}
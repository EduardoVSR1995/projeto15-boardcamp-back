import connection from "../database/postgres.js";

export default async function (localItens , iten){
    const lock=[];

    for (let index = 0; index < iten.length; index++) {
        lock.push(`$${index+1}`)
    }
    try {
        
        const promis = await connection.query(`INSERT INTO ${localItens} VALUES (${lock.toString()}) ;`, iten )
        
        return promis
        
    } catch (error) {
        return error;
    }
}
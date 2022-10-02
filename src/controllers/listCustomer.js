import connection from '../database/postgres.js';
import getList from '../suports/getsList.js';
import getItem from '../suports/getItem.js';

export default async function(req, res ){

    console.log(req.params.id)

    try {

        if(req.params.id){
            
            const promis = await connection.query(`SELECT * FROM customers WHERE id = $1`,[Number(req.params.id)])
            
            console.log(promis)

            if (promis.rows.length===0 || req.params.id===0 ) return res.sendStatus(404);  

            res.send(promis.rows).status(200);

            return;
        };


        if(req.query.cpf){

            const promis = await getItem("customers", "cpf", req.query.cpf )
            
            res.send(promis.rows).status(200);

            return;
        };

        const promis = await getList("customers")

        res.send(promis).status(200);

    } catch (error) {
        
        res.send(error).status(400) ;      
    }
}




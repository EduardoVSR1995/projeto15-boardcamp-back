import connection from '../database/postgres.js';
import getList from '../suports/getsList.js';
import getItem from '../suports/getItem.js';

export default async function(req, res ){
    try {

        if(req.params.id){
            
            const {rows} = await connection.query(`SELECT * FROM customers WHERE id = $1`,[req.params.id])
            
            if (rows.name)return res.sendStatus(404);  

            res.send(rows[0]).status(200);

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
        console.log(error)
        res.sendStatus(400) ;      
    }
}




import connection from '../database/postgres.js'

export default async function(req, res ){
    let name ='%%';
    let offset="";
    try {
        if (req.query.offset) offset=` OFFSET ${req.query.offset} ROWS`;
        if(req.query.name) name=`%${req.query.name.toLowerCase()}%`;

        const promis = await connection.query(`SELECT games.* , categories.name AS "categoryName" FROM categories JOIN games ON categories."id" = games."categoryId" AND LOWER(games."name") LIKE $1 ${offset};`, [name] )
        
        res.send(promis.rows).status(200);

    } catch (error) {
        
        res.send(error).status(400) ;      
    }
}




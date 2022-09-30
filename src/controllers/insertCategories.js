import getItem from "../suports/getItem.js";
import insert from "../suports/insert.js";


export default async function insertCategories(req, res){
    const name = req.body.name;
    try {
        
        const verifi = await getItem('categories', 'name', `${name}` );

        if(!verifi.rows.name)return res.sendStatus(409);

        await insert( 'categories ( name )', `${name}`) ;

        res.sendStatus(201);

    } catch (error) {
        console.log(error, "12 ica")
        res.sendStatus(error)
    }

}
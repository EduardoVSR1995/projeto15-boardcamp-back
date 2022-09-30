import getsList from '../suports/getsList.js'

export default async function listenCategori(req, res ){
    try {

        const promis = await getsList('categories') 

        console.log(promis)

        res.send(promis).status(200);
            
    } catch (error) {
        
        res.send(error).status(400) ;      
    }
}




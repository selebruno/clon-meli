const { default: axios } = require("axios");
const server = require("express").Router();
require('dotenv').config();


server.get('/items', async (req,res) => {
    const title = req.query.title
    const apiUrl = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${title}&limit=4`)
    const infoNedeed = await apiUrl.data.results.map(result => {
        return {
        author : result.permalink,
        categories: result.attributes.map(el => el.value_name),
        items: [
            {
                id: result.id,
                title: result.title,
                price: {
                    currency: result.currency_id,
                    amount: result.price,
                },
                picture: result.thumbnail,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping
            }
        ]
        
    }
})
res.status(200).send(infoNedeed);
});

server.get('/items/:id', async (req,res) =>{
    const id = req.params.id
    const idApi = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    const idDescription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    const datosApi = idApi.data;
        const infoNedeed= {
            author:datosApi.seller_id,
            item:{
                id: datosApi.id,
                title: datosApi.title,
                price:{
                    currency: datosApi.currency_id,
                    amount: datosApi.price
                },
            pictures: datosApi.pictures.map(el => el.url),
            condition: datosApi.condition,
            free_shipping: datosApi.shipping.free_shipping,
            sold_quantity: datosApi.sold_quantity,
            description: idDescription.data.plain_text
        }
           

            }
        infoNedeed.length > 0?
        res.status(200).send(infoNedeed) :
        res.status(404).send('No se encontraron resultados')
})


module.exports = server
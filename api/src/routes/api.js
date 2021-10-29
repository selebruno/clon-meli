const { default: axios } = require("axios");
const server = require("express").Router();
require("dotenv").config();

server.get("/items", async (req, res) => {
  try {
    const q = req.query.q;
    const apiUrl = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`
    );
    const infoNedeed = await apiUrl.data.results.map((result) => {
      return {
        author: {
          id: result.seller.id,
          address: result.address.state_name,
        },
        categories: apiUrl.data.filters.map((el) =>
          el.values.map((item) => item.name)
        ),
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
            free_shipping: result.shipping.free_shipping,
          },
        ],
      };
    });
    infoNedeed.length > 0
      ? res.status(200).send(infoNedeed)
      : res.status(404).json({
          error: "no hay resultados",
        });
  } catch (error) {
    console.error(error);
  }
});

server.get("/items/:id", async (req, res) => {
  try { 
  const id = req.params.id;
  const idApiPromise = axios.get(`https://api.mercadolibre.com/items/${id}`);
  const idDescriptionPromise = axios.get(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  const [idApi, idDescription] = await Promise.all([
    idApiPromise,
    idDescriptionPromise,
  ]);
  const datosApi = idApi.data;
  const categoryApi = await axios.get(
    `https://api.mercadolibre.com/categories/${datosApi.category_id}`
  );
  const infoNedeed = {
    author: datosApi.seller_id,
    item: {
      id: datosApi.id,
      title: datosApi.title,
      price: {
        currency: datosApi.currency_id,
        amount: datosApi.price,
      },
      pictures: datosApi.pictures.map((el) => el.url),
      condition: datosApi.condition,
      free_shipping: datosApi.shipping.free_shipping,
      sold_quantity: datosApi.sold_quantity,
      available_quantity: datosApi.available_quantity,
      category_id: datosApi.category_id,
      description: idDescription?.data?.plain_text
        ? idDescription.data.plain_text
        : "No hay descripción disponible",
    },
    categories: {
      name: categoryApi.data.name,
      path: categoryApi.data.path_from_root,
    },
  };
     res.status(200).send(infoNedeed)
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: "no existe el producto"
    })
  }})


module.exports = server;

# Test Front End

Este proyecto fue diseñado para permitir al usuario navegar en distintas páginas:

- Una página principal con una barra de búsqueda.
- Una vista de los resultados que arroja cada búsqueda
- Una vista del detalle de cada producto.



## Tecnologias

- Javascript
- React 
- Redux & Redux-Thunk
- Chakra UI
- Node JS
- Express JS
- Jest/Enzyme/chai


## Arrancando

Se puede acceder a la aplicación funcionando a través del siguiente link:

```
https://test-front-meli-henna.vercel.app/
```



## Desarrollando

Para poder levantar la aplicación de manera local se requiere realizar los siguientes pasos:


Descargar las dependencias corriendo tanto en la carpeta api como en client:

```
 npm i
```

En Api, vamos a necesitar un archivo env en el que declaremos en qué puerto va a escuchar nuestro backend y la url de la api:

```
PORT = 3000
API_URL = https://api.mercadolibre.com
```
Arrancar el servidor de desarrollo en las carpetas client y server con

```
npm start
```

Luego es posible ingresar al sitio web desde la siguiente URL

```
http://localhost:3000/
```





## Notas

La estructura del backend se encuentra organizada de la siguiente manera:

### /api/items?q=:query

```
{
 “author”: {
 “id”: Number
 “address”: String
 },
 categories: [String, String, String, ...],
 items: [
 {
 "id": String,
 "title": String,
 "price": {
 "currency": String,
 "amount": Number
 },
 “picture”: String,
 "condition": String,
 "free_shipping": Boolean
 },
 {...},
 {...},
 {...}
 ]
}

```



### /api/items/:id

```{
 “author”: Number,
 “item”: {
 "id": String,
 "title": String,
 "price": {
 "currency": String,
 "amount": Number,
 },
 “pictures”: [String, String, String, ...],
 "condition": String,
 "free_shipping": Boolean,
 "sold_quantity": Number,
"available_quantity": Number,
"category_id":String,
 "description": String,
 "categories":{
     "name": "String",
     "path": [{
         "id":String,
         "name":String
     },
     {
         "id":String,
         "name":String
     },
     {
         "id":String,
         "name":String
     }
     ]
 }
 }
}


```

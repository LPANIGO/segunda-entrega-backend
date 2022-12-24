import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import config from './config/config.js';

const app = express();
console.log(config.app);
const server = app.listen(config.app.PORT, () => console.log(`Listening on port ${config.app.PORT}`));


app.use(express.json()); //configuro para recibir json del front.


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
//ver plantilla front ingresar productos en final de clase 12 y clase motor de plantillas.
//validar params recibidos en cada ruta, procesar de string a int por ej.
//para ids validar out of bounds error.

app.use( (req, res, next) => {
    res.status(404).send({ error : "404", description: `path '${req.path}' method '${req.method}' not implemented`})
    next();//permite ir a lo que sigue
})
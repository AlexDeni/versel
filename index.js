const express = require('express');
const app = express();
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8080;
//const productRoutes = require('./routes/productRoutes');
//const userRoutes = require('./routes/userRoutes');
//app.use(express.json());
console.log(11111)
app.get('/', (req, res) => {
    res.send('products api running new deploy');
});
console.log(222)

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// // /products
// app.use('/products', productRoutes);
// // /users
// app.use('/users', userRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
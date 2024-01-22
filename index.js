const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8080;

const CatalogModel = require("./models/Catalog");
//app.use(express.json());

const MONGO_DB = 'mongodb+srv://alexdenisenko94:12345@cluster0.4zxfjoz.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(MONGO_DB).then(()=>console.log('db ok')).catch(e => console.log('error', e))


app.get('/', (req, res) => {
    res.send('products api running new deploy');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});

app.get('/catalog', async (req, res) => {
    try {
        const posts = await CatalogModel.find().exec()
        res.json(posts)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось получить статьи'
        })
    }})
// // /products
// app.use('/products', productRoutes);
// // /users
// app.use('/users', userRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})


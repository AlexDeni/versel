const mongoose = require('mongoose');
//const dbHOST = process.env.DBHOST;
MONGO_DB = 'mongodb+srv://alexdenisenko94:12345@cluster0.4zxfjoz.mongodb.net/blog?retryWrites=true&w=majority'

mongoose.connect(MONGO_DB)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })
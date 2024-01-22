const mongoose = require('mongoose')

const CatalogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    text: String,
    price: Number,
    tags: {
        type: Array,
        default: [],
        required: false,
        unique: false
    },
    color: String,
    size: String,
    viewsCount: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        required: true,
        default: []
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Catalog', CatalogSchema);

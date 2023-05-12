const { Schema, model, Types } = require('mongoose')

const stuf = new Schema({
    _id: { type: Types.ObjectId },
    email: { type: String },
    name: { type: String },
    phone: { type: String },
    imgsrc: { type: String },
    imgalt: { type: String, },
    post: [{ type: String }],
    quote: { type: String },
})

module.exports = model('Stuf', stuf)
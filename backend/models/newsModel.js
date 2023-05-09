const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    _id: { type: Types.ObjectId },
    title: { type: String, required: true, unique: true, },
    promo: [{ type: String, required: true, unique: true, }],
    text: [{ type: String, required: true, unique: true, }],
    imgsrc: { type: String, required: true, unique: true, },
    imgalt: { type: String, },
    description: [{ type: String, required: true, unique: true, }],
    id: { type: String, unique: true, },
})

module.exports = model('News', schema)
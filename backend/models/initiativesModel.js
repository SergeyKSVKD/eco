const { Schema, model, Types } = require('mongoose')

const initiatives = new Schema({
    _id: { type: Types.ObjectId },
    author: { type: String, required: true, },
    contacts: [{ type: String, required: true, }],
    date: { type: String, required: true, },
    department: { type: String, required: true, },
    description: { type: String, required: true, },
    name: { type: String, required: true, unique: true, },
    publisched: { type: String, required: true, },
    status: { type: String, required: true, },
})

module.exports = model('Initiatives', initiatives)
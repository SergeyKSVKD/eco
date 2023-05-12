const { Schema, model, Types } = require('mongoose')

const events = new Schema({
    _id: { type: Types.ObjectId },
    date: { type: String, required: true, },
    description: [{ type: String, required: true, }],
    name: { type: String, required: true, },
})

module.exports = model('Events', events)
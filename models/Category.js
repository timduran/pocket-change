const { Schema, model } = require('mongoose')

const Category = new Schema({
  name: String,
  actualValue: {
    type: Number
  },
  goalValue: {
    type: Number
  },
  result: {
    type: Number
  }
  month: {
    type: Schema.Types.ObjectId,
    ref: 'month'
  }
}, { timestamps: true })

module.exports = model('category', Category)
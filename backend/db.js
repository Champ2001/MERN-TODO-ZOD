const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://Sarnava:sarnava@cluster0.ydctxf1.mongodb.net/Todo')

const todoSchema = mongoose.Schema({
  title:{
    type: String,
    required: true,
  }, 
  description:{
    type: String,
    required: true,
  },
  completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
  todo
}
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose
  .connect('mongodb+srv://sai413183:sai413183@cluster0.hnfoztp.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

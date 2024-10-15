const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.rw7vp.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDb Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://book:gCSdRhrseEvRdpep@cluster0.rue17px.mongodb.net/bookstore"
    ).then((res) => console.log("connected"))
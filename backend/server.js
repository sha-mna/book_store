const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require('./routes/booksRoutes');

require("./connection/conn");

app.use(cors());

app.use(express.json());
app.use("/api/v1", bookRoute);

app.get("/services", (req,res) => {
    res.send("Services page")
})

app.get("/about", (req,res) => {
    res.send("About Page");
});

app.listen(1000, () => {
    console.log(`Server is running on 1000`);
})
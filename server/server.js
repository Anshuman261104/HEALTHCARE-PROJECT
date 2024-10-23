const express = require('express');
const connectDb= require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const port = process.env.PORT || 5000;

const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();

app.use(express.json());
app.use(cors());
//hello
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('working');
});
app.get("/home",(req,res)=>{
    res.render("home",{
        users: [
            { username: "Parth", date: "23-10-2024", subject: "Maths" },
            { username: "Aarav", date: "23-10-2024", subject: "Science" },
            { username: "Ishika", date: "23-10-2024", subject: "History" }
        ]
    })
})
app.set('view engine','hbs');
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
}) 
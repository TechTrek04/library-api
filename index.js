import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';



const connectionString = process.env.MONGO_URI
console.log(connectionString)



const app = express();

mongoose.connect(connectionString).then(() => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
})

const PORT = 6000;


app.use(express.json()); // Middleware to parse JSON requests


// app.get("/", (req, res) => {
//   res.send("Welcome to the Student Record System API!");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
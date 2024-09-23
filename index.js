import express from "express"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

console.log(__dirname);
app.listen(port, function () {
    console.log("Server started on port 3000");
});

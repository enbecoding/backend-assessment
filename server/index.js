const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment, getFortune, getRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } = require("./controllers/controller")

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);


app.get("/api/restaurants", getRestaurants);

app.post("/api/restaurants", addRestaurant);

app.put("/api/restaurants/:id", updateRestaurant);

app.delete("/api/restaurants/:id", deleteRestaurant);



app.listen(4004, () => console.log("Server running on 4004"));

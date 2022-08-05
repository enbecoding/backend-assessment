const { response } = require("express");
const restaurants = require("../config/db.json")
console.log(restaurants)
let base_id = 6

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Challenge builds character!", "Easy decisions bring a hard life, while hard decisions bring an easy life!", "All hard work is a reward in itself", "Believe it can be done."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getRestaurants: (req, res) => {
        res.send(restaurants)
    },

    addRestaurant: (req, res) => {
        let { name } = req.body
        let new_restaurant = {
            id:base_id,
            name
        }
        restaurants.push(new_restaurant)
        res.status(200).send(restaurants)
    },

    updateRestaurant: (req, res) => {
       const restaurantname = restaurants.find (  (name_obj) => name_obj.id === parseInt(req.params.name))
       restaurantname.name = req.body.name

    },

    deleteRestaurant: (req, res) => {
        let index = restaurants.findIndex ( restaurant => restaurant.id === parseInt(req.params.name))
        restaurants.splice(index -1, 1)
        res.status(200).send(restaurants)
    }

}
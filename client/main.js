const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const restaurantContainer = document.querySelector("#restaurant-container")
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/restaurants`

const getCompliment = () => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4004/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const restaurantsCallback = ( {data: restaurants} ) => displayRestaurants(restaurants)
const errCallback = err => console.log(err.response.data)

const getAllRestaurants = () => axios.get(baseURL).then(restaurantsCallback).catch(errCallback)
const createRestaurant = body => axios.post(baseURL, body).then(restaurantsCallback).catch(errCallback)
const deleteRestaurant = id => axios.delete(`${baseURL}/${id}`).then(restaurantsCallback).catch(errCallback)
const updateRestaurant = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(restaurantsCallback).catch(errCallback)

const submitRestaurant = (e) =>{
    e.preventDefault()

    let name = document.querySelector('#name')

    let bodyObj = {
        name: name.value
    }

    createRestaurant(bodyObj)

    name.value = ''
}

let createRestaurantSlot = (restaurant) => {
    const restaurantSlot = document.createElement('div')
    restaurantSlot.classList.add(`resaurant-slot`)

    restaurantSlot.innerHTML = `<p class="restaurant-name">${restaurant.name}</p>
    <button onclick="deleteRestaurant(${restaurant.id})">delete</button>
    `

    restaurantContainer.appendChild(restaurantSlot)
}

let displayRestaurants = arr => {
    restaurantContainer.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        createRestaurantSlot(arr[i])
        
    }
}

form.addEventListener('submit', submitRestaurant)

getAllRestaurants()
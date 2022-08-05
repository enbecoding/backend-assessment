const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const restaurantContainer = document.querySelector("#restaurant-container")
const form = document.querySelector('form')

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

const submitRestaurant = (e) =>{
    let name = document.querySelector('#name')

    
}

form.addEventListener("submit", submitRestaurant)


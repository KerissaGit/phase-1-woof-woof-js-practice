// const pupsUrl = 'http://localhost:3000/pups'


//----------REVIEW CODE--------------
//-------------WAY 1------------------
//------Breakdown way of functions ---------

const dogBar = document.getElementById("dog-bar");
const dogInfo = document.getElementById("dog-info");

// function updateDogButtonText(dogObj, button){
//     const text = dogObj.isGoodDog ? "Good Dog!" : "Naughty Dog!"
//     button.textContent = text
// } //used to refactor code and created new function

function listenForSpanClick(spanClickOn, dogObj) {
    spanClickOn.addEventListener('click', () => {
        const image = document.createElement('img')
        image.src = dogObj.image
    
        const h2 = document.createElement('h2')
        h2.textContent = dogObj.name
    
        const button = document.createElement('button')
        const text = dogObj.isGoodDog ? "Good Dog!" : "Naughty Dog!"
        button.textContent = text
        // updateDogButtonText(dogObj, button)
        // Condensing text, added this function for previous lines

        button.addEventListener('click', () => {
            dogObj.isGoodDog = !dogObj.isGoodDog
            const text = dogObj.isGoodDog ? "Good Dog!" : "Naughty Dog!"
            button.textContent = text
            // updateDogButtonText(dogObj, button)
            //Condensing text, added this function for previous lines

            // if (button.textContent == "Good Dog!") {
            //     button.textContent = "Naughty Dog!"
            // } else {
            //     button.textContent = "Good Dog!"
            // } //Another option to Toggle Good/Naughty Button
        })
        
        dogInfo.innerHTML = '';
        // while(dogInfo.firstChild) {
        //     dogInfo.removeChild(dogInfo.lastChild)
        // } //Example of what dogInfo.innerHTML =' '; does
        dogInfo.append(image, h2, button);
    })
}

function addDogToDogBar(dog) {
    //create new span
    const span = document.createElement('span')
    //added dogs name as text content to new span
    span.textContent = dog.name
    dogBar.appendChild(span)
    listenForSpanClick(span, dog)
    //adding click event
};

function displayDogs(dogs) {
    dogs.forEach(addDogToDogBar)
};


function getDogs() {
    fetch('http://localhost:3000/pups')
    .then((response) => response.json())
    .then(displayDogs)  
};

//Init or Main short for making a list of functions to run them all
function main() {
    getDogs()
}
main();

document.addEventListener('DOMContentLoaded,', () => {
    main()
})


//----------REVIEW CODE--------------
//-------------WAY 2------------------
//--------Condenced function------------

// fetch(pupsUrl)
// .then((response) => response.json())
// .then((dogs) => dogs.forEach(dog) => {
//     //create new span
//     const span = document.createElement('span')
//     //added dogs name as text content to new span
//     span.textContent = dog.name
//     dogBar.appendChild(span)
// }))



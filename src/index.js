console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",function () {
 fetchDogImages()
} )

function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response =>response.json())
   .then(data => {
        // console.log(data)
        //let images = data.message
        data.message.forEach(image =>loadImagesToDom(image))});
    
}

function loadImagesToDom(image){
    let dogsCont = document.getElementById('dog-image-container');
    let ourImage = document.createElement('img');
    ourImage.src = image;
    dogsCont.appendChild(ourImage);
    
}

function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }
  
  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }
 
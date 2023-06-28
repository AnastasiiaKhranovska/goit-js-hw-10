import './css/styles.css';
import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import Notiflix from 'notiflix';

const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

breedSelect.onchange = showCatCard;
  
function markupBreedSelect() { 
    loader.classList.remove('hide');
    fetchBreeds()
        .then(data => {
          loader.classList.add('hide');
          breedSelect.innerHTML = data.map(({ name, id }) => `<option value="${id}">${name}</option>`).join('');
          breedSelect.classList.remove('hide');
      })
        .catch(() => {
            loader.classList.add('hide');
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      });
    
}
markupBreedSelect() 

function showCatCard() {
  catInfo.innerHTML = '';
    loader.classList.remove('hide');
    fetchCatByBreed(breedSelect.value)
      .then(data => {
       loader.classList.add('hide');
        markUpCatInfo(data[0]);
      })
        .catch(() => {
          loader.classList.add('hide');
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      });
}

function markUpCatInfo(breed) {
    loader.classList.add('hide');
    let title = `<h2>${breed.breeds[0].name}</h2>`
    let image = `<div><img src="${breed.url}" class = "cat-img" alt="cat" width="600"></div>`;
    let description = `<h3>Description</h3><p>${breed.breeds[0].description}</p>`;
    let temperament = `<h3>Temperament</h3><p>${breed.breeds[0].temperament}</p>`;
    catInfo.innerHTML = image + '<div class="content">' + title + description + temperament + '</div>';
    console.log(title);
};



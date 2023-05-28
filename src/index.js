import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const URL_START = 'https://api.thecatapi.com/v1/breeds';
const URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_56u4qZvUIrHjhxiTu1SE4yfg1ZrFNbVxDAI5Ukoi1SzrlcxkQYjymljiMumVZeEa';

const breedSelectRef = document.querySelector('.breed-select');
const loaderMessage = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loaderMessage.hidden = true;
errorMessage.hidden = true;

fetchBreeds(URL_START, API_KEY)
  .then(data => {
    data = data.filter(img => img.image?.url != null);

    for (let i = 0; i < data.length; i += 1) {
      const breed = data[i];

      let option = document.createElement('option');
      option.value = breed.id;
      option.innerHTML = breed.name;
      breedSelectRef.append(option);
    }
  })
  .catch(error => {
    console.error(error);
    errorMessage.hidden = false;
  });

breedSelectRef.addEventListener('change', e => {
  loaderMessage.hidden = false;
  catInfo.innerHTML = '';
  const breedId = e.target.value;

  fetchCatByBreed(breedId, URL, API_KEY)
    .then(dataCat => {
      const cat = dataCat[0].breeds[0];

      const aboutCatMarkup = `<div class="cat-img-thumb"><img class="cat-info-img" src="${dataCat[0].url}" alt="${cat.alt_names}" /></div>
       <div class="cat-info-thumb">
        <h2 class="cat-info-breed">${cat.name}</h2>
        <p class="cat-info-description">${cat.description}</p>
        <p class="cat-info-temperament"><b>Temperament:</b> ${cat.temperament}</p>
      </div>`;

      catInfo.innerHTML = aboutCatMarkup;
      loaderMessage.hidden = true;
    })
    .catch(error => {
      console.error(error);
      loaderMessage.hidden = true;
      errorMessage.hidden = false;
    });
});

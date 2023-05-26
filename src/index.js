import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const urlStart = 'https://api.thecatapi.com/v1/breeds';
const url = 'https://api.thecatapi.com/v1/images/search';
const api_key =
  'live_56u4qZvUIrHjhxiTu1SE4yfg1ZrFNbVxDAI5Ukoi1SzrlcxkQYjymljiMumVZeEa';

const catBreedsList = document.querySelector('.breed-select');
const loaderMessage = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loaderMessage.hidden = true;
errorMessage.hidden = true;

fetchBreeds(urlStart, api_key)
  .then(data => {
    addListMarkup(data);
  })
  .catch(error => (error.hidden = false));

function addListMarkup(data) {
  catBreedsList.innerHTML = renderHTMLList(data);
}

function renderHTMLList(data) {
  return data.map(({ id, name }) => {
    return `<option value='${id}'> ${name}</option>`;
  });
}

catBreedsList.addEventListener('change', e => {
  loaderMessage.hidden = false;

  const breedId = e.target.value;

  fetchCatByBreed(breedId, url, api_key)
    .then(data => {
      addListItem(data);
    })
    .catch(error => (error.hidden = false));
});

function addListItem(data) {
  catInfo.innerHTML = renderHTMLItem(data);
}
function renderHTMLItem(data) {
  return data.map(({ url, name, description, temperament }) => {
    loaderMessage.hidden = true;
    return `<img src="${url}" width=300px">
    <div class="infoAboutCat">
    <h2 class ="second-header">${name}</h2>
    <p>${description}</p>
 <p>${temperament}</p>
  <div>`;
  });
}

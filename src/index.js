import { fetchBreeds } from './cat-api.js';

urlStart = 'https://api.thecatapi.com/v1/breeds';
url = 'https://api.thecatapi.com/v1/images/';
api_key =
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
  return data.map(({ name, image }) => {
    console.log(image.id);

    return `<option value='${image.id}'> ${name}</option>`;
  });
}

catBreedsList.addEventListener('change', e => {
  loaderMessage.hidden = false;

  const urlSecond = `${url}${e.target.value}`;
  console.log(urlSecond);
  fetchBreeds(urlSecond, api_key)
    .then(data => {
      renderHTMLItem(data);
    })
    .catch(error => (error.hidden = false));
});

function renderHTMLItem({ image, name, description, temperament }) {
  const markupItem = `<img src="${image.url}" width=300px alt="cat ${name}">
  <div class="infoAboutCat">
      <h2 class ="second-header">${name}</h2>
    <p>${description}</p>
    <p>${temperament}</p>
    <div>`;
  catInfo.innerHTML = markupItem;
  loaderMessage.hidden = true;
}

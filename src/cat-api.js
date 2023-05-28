function fetchBreeds(URL_START, API_KEY) {
  return fetch(`${URL_START}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId, URL, API_KEY) {
  return fetch(`${URL}?breed_ids=${breedId}&api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export { fetchBreeds, fetchCatByBreed };

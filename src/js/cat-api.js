export function fetchBreeds() {
  const URL_API = `${BASE_URL}/v1/breeds?api_key=${API_KEY}`;

  return fetch(URL_API)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(res => res.map(item => ({ name: item.name, id: item.id })))
}

export function fetchCatByBreed(breedId) {
  const URL_API = `${BASE_URL}/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`;
 
  return fetch(URL_API)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
}
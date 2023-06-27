export function fetchBreeds () {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_KHBqAXcbXFc8kdDImgUQExzJaGKqaAXWcluBhZtT60cl3dTFQ6HhALcZNqLnuH3D').then(data => {
        if (!data.ok) {
            throw new Error(data.status)
        }
        return data.json();
    })
};

export function fetchCatByBreed(breedId) {
    return fetch ('https://api.thecatapi.com/v1/breeds?api_key=live_KHBqAXcbXFc8kdDImgUQExzJaGKqaAXWcluBhZtT60cl3dTFQ6HhALcZNqLnuH3D').then(data => {
        if (!data.ok) {
            throw new Error(data.status)
        }
        return data.json();
    });
};
import { API_KEY, BASE_URL } from "./apiConfig"

const options = {
    method: 'GET',
    headers: {
        'X-Mashape-Key': API_KEY,
    }
};

// Return recipe information about multiple dishes
function getMenuDetails(dishes) {

    const url = BASE_URL+ "recipes/informationBulk" + "?ids="+ dishes.join(); // url + query string

    return fetch(url, options).then(getJSON_ACB)

}

// Return recipe information about one dishe
function getDishDetails(id) {

    return getMenuDetails([id]).then(getDishACB)

    function getDishACB(resp) {
        return resp[0]
    }
}

// Return array of dishes based on search query 
function searchDishes(searchParams) {
    const url = BASE_URL + "recipes/complexSearch" + "?" + new URLSearchParams(searchParams)
    return fetch(url, options).then(getJSON_ACB).then(resultArrACB)

    function resultArrACB(resp) {
        return resp.results
    }
}

// ACB to get json
function getJSON_ACB(resp) {
    if (!resp.ok) {
        throw new Error("Could not get menu item details.")
    }
    return resp.json()
}

export {getMenuDetails, getDishDetails, searchDishes}
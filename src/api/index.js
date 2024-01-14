import dotenv from 'dotenv'

const APP_ID = import.meta.env.VITE_YOUR_APP_ID;                               // ADD TO ENV
const APP_KEY = import.meta.env.VITE_YOUR_APP_KEY;

export async function fetchRecipe(filter) {
    const {query, limit} = filter
    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${limit}&`

    const response = await fetch(url)
    const data = await response.json()

    // console.log(import.meta.env.VITE_YOUR_APP_ID)

    return data?.hits; // get data from API and return
}

export async function getRecipe(id) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    return data[0];

}
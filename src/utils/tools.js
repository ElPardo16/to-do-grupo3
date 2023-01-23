// we create a function with get data to fetch the data to the api with the fetch method, and return it in a json 

export async function getData () {
    const response = await fetch('https://to-do-grupo3.netlify.app/api/task')
    return await response.json()
}
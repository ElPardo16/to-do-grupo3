export async function getData () {
    const response = await fetch('https://to-do-grupo3.netlify.app/api/task')
    return await response.json()
}
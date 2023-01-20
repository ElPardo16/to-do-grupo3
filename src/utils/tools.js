export async function getData () {
    const response = await fetch('http://localhost:3000/api/task')
    return await response.json()
}
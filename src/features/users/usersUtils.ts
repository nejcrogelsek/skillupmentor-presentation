export const getUsers = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/users?limit=5').then((response) => response.json())
    return data
}

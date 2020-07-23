const baseURL = (path, obj) => {
    return fetch(`https://jsonplaceholder.typicode.com/${path}`, obj)
}

export { baseURL }
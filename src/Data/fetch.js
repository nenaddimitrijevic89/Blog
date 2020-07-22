const fetchPosts = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    )
}

const fetchAuthors = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    )
}

const fetchSinglePost = (id) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
    )
}

const fetchSingleAuthor = (id) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
    )
}

const fetchAuthorPosts = (id) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
    )
}

export { fetchPosts, fetchAuthors, fetchSinglePost, fetchSingleAuthor, fetchAuthorPosts };
import { AuthorObj } from "../entities/AuthorObj";

const { baseURL } = require("../shared/baseURL");

class AuthorsService {
    getAuthors() {
        return (
            baseURL('users')
                .then(response => response.json())
                .then(authors => {
                    let newAuthors = authors.map(author => new AuthorObj(author))
                    return newAuthors;
                })
        )
    }
    getSingleAuthor(id) {
        return (
            baseURL(`users/${id}`)
                .then(response => response.json())
                .then(author => new AuthorObj(author))
        )
    }
}

export const authorsService = new AuthorsService()

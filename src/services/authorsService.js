import { AuthorObj } from "../entities/AuthorObj";

const { baseURL } = require("../shared/baseURL");

class AuthorsService {
    async getAuthors() {
        return (
            await baseURL('users')
            .then(response => response.json())
            .then(authors => {
                let newAuthors = authors.map(author => new AuthorObj(author))
                return newAuthors;
            })
        )
    }
    async getSingleAuthor(id) {
        return (
            await baseURL(`users/${id}`)
            .then(response => response.json())
            .then(author => new AuthorObj(author))
        )
    }
}

export const authorsService = new AuthorsService()
import { baseURL } from '../shared/baseURL';
import { PostObj } from '../entities/PostObj';

class PostsService {

    async getPosts() {
        return (
            await baseURL('posts')
            .then(response => response.json())
            .then(posts => {
                let newPosts = posts.map(post => new PostObj(post))
                return newPosts;
            })
        )
    }

    async getSinglePost(id) {
        return (
            await baseURL(`posts/${id}`)
            .then(response => response.json())
        )
    }

    async getAuthorPosts(id) {
        return (
            await baseURL(`posts?userId=${id}`)
            .then(response => response.json())
        )
    }

    async postPost(title, post) {
        return (
            await baseURL('posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: post
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
        )

    }
}

export const postsService = new PostsService();
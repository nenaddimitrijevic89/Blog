import { baseURL } from '../shared/baseURL';
import { PostObj } from '../entities/PostObj';

class PostsService {

    getPosts() {
        return (
            baseURL('posts')
                .then(response => response.json())
                .then(posts => {
                    let newPosts = posts.map(post => new PostObj(post))
                    return newPosts;
                })
        )
    }

    getSinglePost(id) {
        return (
            baseURL(`posts/${id}`)
                .then(response => response.json())
        )
    }

    getAuthorPosts(id) {
        return (
            baseURL(`posts?userId=${id}`)
                .then(response => response.json())
        )
    }

    postPost(title, post) {
        return (
            baseURL('posts', {
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
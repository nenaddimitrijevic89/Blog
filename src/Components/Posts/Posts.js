import React from 'react';
import { Header } from '../Header/Header';
import { fetchPosts } from '../../Data/fetch';
import { Post } from './Post';
import './Posts.css'
import { Container } from 'react-materialize';
import { Link } from 'react-router-dom';


class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetchPosts()
            .then(data => {
                this.setState({ posts: data.slice(0, 20) })
            })
    }

    render() {
        return (
            <div className="posts">
                <Header />
                <h4 className="posts__title">POSTS</h4>
                <Container>
                    {this.state.posts.map(post =>
                        <Link to={`/posts/singlepost/${post.id}`}>
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                            />
                        </Link>
                    )}
                </Container>
            </div>
        )
    }
}
export { Posts };
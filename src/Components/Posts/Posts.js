import React from 'react';
import { Header } from '../Header/Header';
import { postsService } from '../../services/postsService';
import { Post } from './Post';
import style from './Posts.module.css';
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
        postsService.getPosts()
            .then(data => {
                this.setState({ posts: data.slice(0, 20) })
            })
    }

    render() {
        return (
            <div className="posts">
                <Header />
                <h4 className={style.title}><i className='fa fa-file-text'></i> POSTS</h4>
                <Container>
                    {this.state.posts.map(post =>
                        <Link to={`/posts/singlepost/${post.id}`} key={post.id}>
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